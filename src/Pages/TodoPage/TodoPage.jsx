import { useState, useEffect, useContext } from 'react';

import ProgressBar from './ProgressBar';
import { CusDatePicker, ShowToday } from 'Components';

import { AuthContext } from 'App';
import Styled from './TodoPage.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { TodoService } from 'Network';
import { format } from 'date-fns';

const TodoPage = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  const [toDo, setToDo] = useState({
    number: 0,
    content: '',
    checked: false,
  });
  const [toDos, setToDos] = useState([]);
  const [number, setNumber] = useState(null);
  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);
  const [date, setDate] = useState(new Date());

  const today = new Date();

  const onSubmit = async event => {
    event.preventDefault();
    if (toDo.content === '') {
      return;
    }

    let nextId = 0;
    if (toDos.length === 0) {
      nextId = 0;
    } else {
      nextId = toDos[toDos.length - 1].todoId;
    }

    const result = await TodoService.postTodo({
      writerId: auth.userId,
      todoId: nextId + 1,
      title: toDo.content,
      titleCheck: false,
      todoDay: format(today, 'yyyy-MM-dd'),
    });

    console.log(result);
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

  const alterCheck = async index => {
    toDos[index].titleCheck = !toDos[index].titleCheck;
    const result = await TodoService.putTodo(toDos[index]);
    console.log(result);
    getTodos();
  };

  const removeToDo = async event => {
    let toDoNumber;
    const tagName = event.target.tagName;
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
    console.log({
      writerId: 1,
      todoId: toDoNumber,
      todoDay: format(today, 'yyyy-MM-dd'),
    });

    const result = await TodoService.deleteTodo(
      auth.userId,
      toDoNumber,
      format(date, 'yyyy-MM-dd'),
    );
    console.log(result);
    getTodos();
  };

  const getTodos = async () => {
    const result = await TodoService.getTodo(
      auth.userId,
      format(date, 'yyyy-MM-dd'),
    );
    setToDos(result.data);
  };

  useEffect(() => {
    getTodos();
  }, [toDo, date]);

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
    console.log(toDos);
    setTotal(total);
    setChecked(checked);
  }, [toDos]);

  return (
    <Styled.MainBackground>
      <div className="time">
        <ShowToday date={date} />
        <CusDatePicker date={date} setDate={setDate} isWeekend={true} />
      </div>
      <div className="main">
        <div className="todo">
          <form onSubmit={onSubmit}>
            <div>
              <input
                onChange={onChange}
                value={toDo.content}
                type="text"
                placeholder="오늘 할 일을 입력하세요."
                className="text"
              />
              <button variant="contained" onClick={onSubmit} className="button">
                추가
              </button>
            </div>
          </form>
          <div className="form">
            <div className="ulist">
              {toDos.map((item, index) => (
                <div key={index}>
                  <div key={index} className="check">
                    <Checkbox
                      onClick={() => alterCheck(index)}
                      checked={item.titleCheck}
                    />
                    {item.titleCheck === false ? (
                      <span id={item.todoId}>{item.title}</span>
                    ) : (
                      <span
                        id={item.todoId}
                        style={{
                          textDecorationLine: 'line-through',
                          color: 'gray',
                          fontSize: 15,
                        }}
                      >
                        {item.title}
                      </span>
                    )}
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={removeToDo}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
            <div className="progressbar">
              <ProgressBar total={total} checked={checked} />
            </div>
          </div>
        </div>
        <div className="othercadet">
          <span>👀 다른 카뎃 구경하기</span>
        </div>
      </div>
    </Styled.MainBackground>
  );
};
export default TodoPage;
