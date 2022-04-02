import { useState, useEffect, useContext } from 'react';

import ProgressBar from './ProgressBar';

import { AuthContext } from 'App';
import Styled from './TodoPage.styled';
import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { CusDatePicker } from 'Components';

import { TodoService } from 'Network';
import { format } from 'date-fns';

const TodoPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

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
    event.preventDefault(); //refresh 방지
    if (toDo.content === '') {
      //empty input 방지
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
      setToDos(
        toDos.filter(
          toDo => parseInt(event.target.previousSibling.id) !== toDo.todoId,
        ),
      );
      toDoNumber = parseInt(event.target.previousSibling.id);
    } else if (tagName === 'svg') {
      setToDos(
        toDos.filter(
          toDo =>
            parseInt(event.target.parentElement.previousSibling.id) !==
            toDo.todoId,
        ),
      );
      toDoNumber = parseInt(event.target.parentElement.previousSibling.id);
    } else if (tagName === 'path') {
      setToDos(
        toDos.filter(
          toDo =>
            parseInt(
              event.target.parentElement.parentElement.previousSibling.id,
            ) !== toDo.todoId,
        ),
      );
      toDoNumber = parseInt(
        event.target.parentElement.parentElement.previousSibling.id,
      );
    }
    console.log({
      writerId: 1,
      todoId: toDoNumber,
      todoDay: format(today, 'yyyy-MM-dd'),
    });

    const result = await TodoService.deleteTodo(
      userId,
      toDoNumber,
      format(date, 'yyyy-MM-dd'),
    );
    console.log(result);
    getTodos();
  };

  // useEffect(() => {
  //   console.log(toDos);
  // }, [toDos]);

  const getTodos = async () => {
    const result = await TodoService.getTodo(
      userId,
      format(date, 'yyyy-MM-dd'),
    );
    setToDos(result.data);
    // setNumber(toDos.length);
    // setDate(today);
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
    <Styled.CusDiv
      maxWidth="90%"
      sx={{
        flexDirection: 'column',
      }}
    >
      <CusDatePicker date={date} setDate={setDate} />
      <Box
        sx={{
          flexDirection: 'column',
          // display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          border: 1,
          borderColor: '#C0C0C0',
          boxShadow: 1,
          borderRadius: 5,
          // minWidth: '40%',
          maxWidth: '100%',
          minHeight: 600,
        }}
      >
        <div style={{ minHeight: 600 }}>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                style={{
                  width: 500,
                  // fontSize: 12,
                }}
                onChange={onChange}
                value={toDo.content}
                type="text"
                placeholder="오늘 할 일을 입력하세요."
              />
              &nbsp;
              <Button
                style={{
                  width: 100,
                  height: 55,
                  fontSize: 15,
                }}
                variant="contained"
                onClick={onSubmit}
              >
                추가
              </Button>
            </div>
          </form>
          <ul>
            {toDos.map((item, index) => (
              <div key={index}>
                <div key={index}>
                  <Checkbox
                    onClick={() => alterCheck(index)}
                    checked={item.titleCheck}
                  />
                  {item.titleCheck === false ? (
                    <span style={{ fontSize: 20 }} id={item.todoId}>
                      {item.title}
                    </span>
                  ) : (
                    <span
                      id={item.todoId}
                      style={{
                        textDecorationLine: 'line-through',
                        color: 'gray',
                        fontSize: 20,
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
          </ul>
        </div>
        <div>
          <ProgressBar style={{ width: 100 }} total={total} checked={checked} />
        </div>
      </Box>
      <Box
        sx={{
          flexDirection: 'column',
          // display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          border: 1,
          borderColor: '#C0C0C0',
          boxShadow: 1,
          borderRadius: 5,
          // minWidth: '40%',
          maxWidth: '100%',
          minHeight: 780,
        }}
      >
        <span>👀 다른 카뎃 구경하기</span>
        {/* <Styled.CusDiv> */}

        <Box
          sx={{
            flexDirection: 'column',
            // display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            border: 1,
            borderColor: '#C0C0C0',
            boxShadow: 1,
            borderRadius: 5,
            // minWidth: '40%',
            maxWidth: '48%',
            minHeight: 340,
          }}
        ></Box>
        <br />
        <Box
          sx={{
            flexDirection: 'column',
            // display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            border: 1,
            borderColor: '#C0C0C0',
            boxShadow: 1,
            borderRadius: 5,
            // minWidth: '40%',
            maxWidth: '48%',
            minHeight: 340,
          }}
        ></Box>
        {/* </Styled.CusDiv> */}
      </Box>
    </Styled.CusDiv>
  );
};
export default TodoPage;
