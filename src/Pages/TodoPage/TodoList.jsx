import { useState, useEffect } from 'react';
import { TodoService } from 'Network';
import { format } from 'date-fns';

import { checkDateTodo } from 'Utils';
import WrongDay from './WrongDay';
import Progress from './Progress';

import styled from 'styled-components';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

const TodoInputForm = (({onSubmit, onChange, toDo, today, date})=> {
  return (
    <form onSubmit={onSubmit}>
      <InputFormBody>
        <InputFormInput
          onChange={onChange}
          value={toDo.content}
          type="text"
          placeholder="오늘 할 일을 입력하세요."
        />
        <InputFormButton
          variant="contained"
          onClick={onSubmit}
          disabled={
            format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
          }
        >
          추가
        </InputFormButton>
      </InputFormBody>
    </form>
  );
})

const ItemNotChecked = (({item, index, changeCheck}) => {
  return (
    <span id={item.todoId} onClick={() => changeCheck(index)}
    style={{
      fontSize: 15,
      cursor: "default",
    }}>
      {item.title}
    </span>
  );
})

const ItemChecked = (({item, index, changeCheck}) => {
  return (
    <span
      id={item.todoId}
      onClick={() => changeCheck(index)}
      style={{
        textDecorationLine: 'line-through',
        color: 'gray',
        cursor: "default",
        fontSize: 15,
      }}
    >
      {item.title}
    </span>
  );
})

const DeleteButton = (({today, date, removeToDo}) => {
  return (
    <IconButton
    aria-label="delete"
    size="small"
    onClick={removeToDo}
    disabled={
      format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
    }
  >
    <DeleteForeverIcon />
  </IconButton>
  );
})

const TodoProgress = (({total, checked}) => {
  return (
    <ProgressBody>
          <Progress total={total} checked={checked} />
    </ProgressBody>
  );
})

const TodoList = ({userId, date}) => {
  const [toDo, setToDo] = useState({
    number: 0,
    content: '',
    checked: false,
  });
  const [toDos, setToDos] = useState([]);
  const [number, setNumber] = useState(null);
  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);
  const [othersToDo, setOthersToDo] = useState([]);
  const today = new Date();

  console.log(toDos);

  const onSubmit = async event => {
    event.preventDefault();
    if (
      toDo.content === '' ||
      format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
    ) {
      return;
    }

    let nextId = 0;
    if (toDos.length === 0) {
      nextId = 0;
    } else {
      nextId = toDos[toDos.length - 1].todoId;
    }

    const result = await TodoService.postTodo({
      writerId: userId,
      todoId: nextId + 1,
      title: toDo.content,
      titleCheck: false,
      todoDay: format(today, 'yyyy-MM-dd'),
    });

    // console.log(result);
    setNumber(nextId);
    setToDo({
      number: 0,
      content: '',
      checked: false,
    });
  };

  const onChange = event => {
    setToDo({
      number: number,
      content: event.target.value,
      checked: false,
    });
  };

  const changeCheck = async index => {
    if (format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')) return;
    toDos[index].titleCheck = !toDos[index].titleCheck;
    const result = await TodoService.putTodo(toDos[index]);
    // console.log(result);
    getTodos(userId);
  };

  const removeToDo = async event => {
    let toDoNumber;
    const tagName = event.target.tagName;
    if (format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')) return;
    if (tagName === 'BUTTON') { 
      const toDoIdButton = parseInt(event.target.previousSibling.id);
      setToDos(toDos.filter(toDo => toDoIdButton !== toDo.todoId));
      toDoNumber = toDoIdButton;
    } else if (tagName === 'svg') {
      const toDoIdSvg = parseInt(event.target.parentElement.previousSibling.id);
      setToDos(toDos.filter(toDo => toDoIdSvg !== toDo.todoId));
      toDoNumber = toDoIdSvg;
    } else if (tagName === 'path') {
      const toDoIdpath = parseInt(
        event.target.parentElement.parentElement.previousSibling.id,
      );
      setToDos(toDos.filter(toDo => toDoIdpath !== toDo.todoId));
      toDoNumber = toDoIdpath;
    }

    const result = await TodoService.deleteTodo(
      userId,
      toDoNumber,
      format(date, 'yyyy-MM-dd'),
    );
    console.log(result);
    getTodos(userId);
  };

  const getTodos = async userId => {
    const result = await TodoService.getTodo(
      userId,
      format(date, 'yyyy-MM-dd'),
    );
    setToDos(result.data);
  };

  const getOthers = async () => {
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    console.log(result.data);
    setOthersToDo(result.data);
  };

  useEffect(() => {
    getTodos(userId);
    getOthers();
  }, [number]);

  useEffect(() => {
    const total = toDos.length;

    if (total === 0) {
      setTotal(0);
      setChecked(0);
      return;
    }
    let checked = 0;
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].titleCheck === true) checked++;
    }
    // console.log(toDos);
    setTotal(total);
    setChecked(checked);
  }, [toDos]);

  return (
    <TodoListBody>
    {checkDateTodo(date) ? (
      <WarningSignNotVaildDate>
        <WrongDay wrongType={checkDateTodo(date)} />
      </WarningSignNotVaildDate>
    ) : (
      <TodoListContainer>
        <TodoInputForm onSubmit={onSubmit} onChange={onChange} toDo={toDo} today={today} date={date}/>
        <TodoMyList>
          {toDos.map((item, index) => (
            <TodoMyListBody key={index}>
              <Checkbox onClick={() => changeCheck(index)} checked={item.titleCheck}
                disabled={
                  format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
                } size="small"
              />
              {item.titleCheck === false ? (
                <ItemNotChecked item={item} index={index} changeCheck={changeCheck}/>
              ) : (
                <ItemChecked item={item} index={index} changeCheck={changeCheck}/>
              )}
              <DeleteButton today={today} date={date} removeToDo={removeToDo}/>
            </TodoMyListBody>
          ))}
        </TodoMyList>
        <TodoProgress total={total} checked={checked}/>
      </TodoListContainer>
  )}
  </TodoListBody>
  );
};

const WarningSignNotVaildDate = styled.div`
overflow : auto;
display: flex;
flex-direction: column;
border: 1px solid #c0c0c0;
padding: 10px;
border-radius: 1em;
margin-right: 50px;
height: 100%;
`
const TodoListBody = styled.div`
width : 50%;
`
const TodoListContainer = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #c0c0c0;
padding: 10px;
border-radius: 1em;
margin-right: 50px;
height: 100%;
`
const TodoMyList = styled.div`
height: 80%;
margin-top: 2%;
font-size: 15px;
overflow : auto;
`
const TodoMyListBody = styled.div`
display: table;
`
const InputFormBody = styled.div`
width: 100%;
`
const ProgressBody = styled.div`
width: 90%;
margin-left: 5%;
margin-bottom: 5%;
`
const InputFormInput = styled.input`
border: 0px;
border-bottom: 3px solid #c0c0c0;
margin-top: 30px;
font-size: 17px;
height: 35px;
width: calc(100% - 80px);
text-align: center;
`
const InputFormButton = styled.button`
border-radius: 5px;
margin-left: 15px;
width: 60px;
height: 40px;
font-size: 17px;
background-color: transparent;
cursor: pointer;
`

export default TodoList;
