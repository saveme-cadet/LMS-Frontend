import { useState, useEffect, useContext } from 'react';

import ProgressBar from './ProgressBar';

import Styled from './TodoPage.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import { TodoService } from 'Network';
import { format } from 'date-fns';

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

  const onSubmit = async event => { // input 태그 submit event 콜백 함수
    event.preventDefault();
    if (
      toDo.content === '' || // input이 비었을 경우
      format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd') // 입력대상 날짜가 오늘이 아닌 경우
    ) {
      return;
    }

    let nextId = 0;
    if (toDos.length === 0) {
      nextId = 0; // todo list가 비었을 경우, todoId 0으로 초기화
    } else {
      nextId = toDos[toDos.length - 1].todoId; // 아닌 경우, list 마지막 요소 todoId를 가져옴
    }

    const result = await TodoService.postTodo({ // POST
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
    }); // object 초기화
  };

  const onChange = event => { // input 태그 change event 콜백 함수
    setToDo({
      number: number,
      content: event.target.value,
      checked: false,
    });
  };

  const alterCheck = async index => { // checkbox 태그 click event 콜백 함수
    if (format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')) return; // 오늘이 아닌 경우
    toDos[index].titleCheck = !toDos[index].titleCheck; // checked 값 변경
    const result = await TodoService.putTodo(toDos[index]); // PUT
    // console.log(result);
    getTodos(userId); // GET
  };

  const removeToDo = async event => { // 삭제 버튼 click event 콜백 함수
    let toDoNumber;
    const tagName = event.target.tagName;
    if (format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')) return; // 오늘이 아닌 경우
    // 버튼 html 구조에 따라 다르게 처리
    if (tagName === 'BUTTON') { 
      const toDoIdButton = parseInt(event.target.previousSibling.id); // 삭제 버튼 태그 선택
      setToDos(toDos.filter(toDo => toDoIdButton !== toDo.todoId)); // 해당 태그만 필터링
      toDoNumber = toDoIdButton; // 삭제된 태그의 todoId 저장
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

    const result = await TodoService.deleteTodo( // PUT
      userId,
      toDoNumber,
      format(date, 'yyyy-MM-dd'),
    );
    console.log(result);
    getTodos(userId); // GET
  };

  const getTodos = async userId => { // GET
    const result = await TodoService.getTodo(
      userId,
      format(date, 'yyyy-MM-dd'),
    );
    setToDos(result.data); // 나의 todo list 설정
  };

  const getOthers = async () => { // 여기 있어야 하나?
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    console.log(result.data);
    setOthersToDo(result.data);
  };

  useEffect(() => {
    getTodos(userId); // 나의 todo list 불러오기
    getOthers(); // 다른 카뎃 todo list 불러오기
  }, [number]); // submit 될 때마다

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
  }, [toDos]); // 진행 상황이 바뀔 때마다

  return (
    <div className="todo">
      <form onSubmit={onSubmit}>
        <div className="todo__header">
          <input
            onChange={onChange}
            value={toDo.content}
            type="text"
            placeholder="오늘 할 일을 입력하세요."
            className="text"
          />
          <button
            variant="contained"
            onClick={onSubmit}
            className="button"
            disabled={
              format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
            }
          >
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
                  disabled={
                    format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
                  }
                />
                {item.titleCheck === false ? (
                  <span id={item.todoId} onClick={() => alterCheck(index)}>
                    {item.title}
                  </span>
                ) : (
                  <span
                    id={item.todoId}
                    onClick={() => alterCheck(index)}
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
                  disabled={
                    format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
                  }
                >
                  <DeleteForeverIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="progressbar">
          <ProgressBar total={total} checked={checked} />
      </div>
    </div>
  );
};

export default TodoList;
