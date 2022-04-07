import { useState, useEffect, useContext } from 'react';

import ProgressBar from './ProgressBar';
import { CusDatePicker, ShowToday } from 'Components';
import { validDayTodoPage } from 'Utils';
import WrongDay from './WrongDay';

import { AuthContext } from 'App';
import Styled from './TodoPage.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import { TodoService } from 'Network';
import { format } from 'date-fns';
import { OtherHouses } from '@mui/icons-material';

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
  const [othersToDo, setOthersToDo] = useState([]);

  const today = new Date();

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

  const alterCheck = async index => {
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
    // console.log({
    //   writerId: 1,
    //   todoId: toDoNumber,
    //   todoDay: format(today, 'yyyy-MM-dd'),
    // });

    const result = await TodoService.deleteTodo(
      userId,
      toDoNumber,
      format(date, 'yyyy-MM-dd'),
    );
    // console.log(result);
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
    // console.log(result.data);
    setOthersToDo(result.data);
  };

  useEffect(() => {
    getTodos(userId);
    getOthers();
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
    // console.log(toDos);
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
        {validDayTodoPage(date) ? (
          <div className="todo">
            <WrongDay wrongType={validDayTodoPage(date)} />
          </div>
        ) : (
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
                          format(today, 'yyyy-MM-dd') !==
                          format(date, 'yyyy-MM-dd')
                        }
                      />
                      {item.titleCheck === false ? (
                        <span
                          id={item.todoId}
                          onClick={() => alterCheck(index)}
                        >
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
                          format(today, 'yyyy-MM-dd') !==
                          format(date, 'yyyy-MM-dd')
                        }
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
        )}
        <div className="othercadet">
          <div className="title">👀 다른 카뎃은 무엇을?</div>
          {format(new Date('2022-04-03'), 'yyyy-MM-dd') >
          format(date, 'yyyy-MM-dd') ? (
            <div className="notvaliddate" style={{ color: 'gray' }}>
              진행하지 않은 날짜입니다!
            </div>
          ) : (
            ''
          )}
          {format(today, 'yyyy-MM-dd') >= format(date, 'yyyy-MM-dd') ? (
            <div className="cadetlist" key="index">
              {othersToDo.map((item, index) => (
                <div key={index} className="cadet">
                  <div key={index} className="othercadetname">
                    {item.userName}
                  </div>
                  <div className="otherstodo">
                    {item.todoDtoList.length === 0 ? (
                      <div className="none">
                        <span style={{ color: 'gray' }}>
                          등록된 할 일이 없습니다!
                        </span>
                      </div>
                    ) : (
                      <div>
                        {item.todoDtoList.map((list, index) => (
                          <div key={index}>
                            <span className="otherstodolist">
                              {list.titleCheck === true ? (
                                <Checkbox
                                  defaultChecked
                                  sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 17 },
                                  }}
                                  disabled
                                />
                              ) : (
                                <Checkbox
                                  sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 17 },
                                  }}
                                  disabled
                                />
                              )}
                            </span>
                            {list.titleCheck === false ? (
                              <span>{list.title}</span>
                            ) : (
                              <span
                                style={{
                                  textDecorationLine: 'line-through',
                                  color: 'gray',
                                }}
                              >
                                {list.title}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="notvaliddate" style={{ color: 'gray' }}>
              아직 진행하지 않은 날짜입니다!
            </div>
          )}
        </div>
      </div>
    </Styled.MainBackground>
  );
};
export default TodoPage;
