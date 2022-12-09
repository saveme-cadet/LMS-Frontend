import { useState, useEffect } from 'react';
import { TodoService } from 'API';
import { format } from 'date-fns';
import { checkDateTodo, isToday } from 'Utils';
import { getTodo } from 'Hooks/todo';

import WarningNotVaildDate from '../WarningNotValidDate';
import TodoInputForm from './TodoInputForm';
import TodoList from './TodoList';
import TodoProgress from './TodoProgress';

import styled from 'styled-components';

import { useMutation, useQueryClient } from 'react-query';

const MyTodoList = ({ userId, date }) => {
  const [toDo, setToDo] = useState({
    content: '',
    checked: false,
  });

  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const { status: stat, data: toDos } = getTodo(
    userId,
    format(date, 'yyyy-MM-dd'),
  );
  const client = useQueryClient();
  console.log('query', toDos, stat);

  const today = new Date();

  const postTodo = useMutation(args => TodoService.postTodo(args[0], args[1]), {
    onSuccess: () => {
      client.invalidateQueries(['todos', format(date, 'yyyy-MM-dd')]);
    },
  });

  const patchTodo = useMutation(
    args => TodoService.patchTodo(args[0], args[1], args[2]),
    {
      onSuccess: () => {
        client.invalidateQueries(['todos', format(date, 'yyyy-MM-dd')]);
      },
    },
  );

  const deleteTodo = useMutation(
    args => TodoService.deleteTodo(args[0], args[1]),
    {
      onSuccess: () => {
        client.invalidateQueries(['todos', format(date, 'yyyy-MM-dd')]);
      },
    },
  );

  const onSubmit = event => {
    event.preventDefault();
    if (toDo.content.trim() === '' || !isToday(today, date)) {
      return;
    }
    if (toDo.content.trim().length > 99) {
      alert('100자 이내로 입력해 주세요.');
      return;
    }

    postTodo.mutate([
      userId,
      {
        title: toDo.content.trim(),
        todoDay: format(today, 'yyyy-MM-dd'),
      },
    ]);
    setToDo({
      content: '',
      checked: false,
    });
  };

  const onChange = event => {
    setToDo({
      content: event.target.value,
      checked: false,
    });
  };

  const changeCheck = index => {
    const selected = toDos[index];

    if (!isToday(today, date) || selected.title == '') return;

    patchTodo.mutate([
      userId,
      selected.todoId,
      {
        title: selected.title,
        titleCheck: !selected.titleCheck,
      },
    ]);
  };

  const removeToDo = event => {
    let toDoNumber =
      event.target.closest('button').previousSibling.previousSibling.id;
    if (!isToday(today, date)) return;
    deleteTodo.mutate([userId, toDoNumber]);
  };

  const showProgress = () => {
    if (!toDos) return;
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
    setTotal(total);
    setChecked(checked);
  };

  useEffect(() => {
    setIsEdit();
  }, [date]);

  useEffect(() => {
    showProgress();
    console.log('todo has changed');
  }, [toDos]);

  useEffect(() => {
    console.log('stat has changed');
  }, [stat]);

  return (
    <TodoListBody>
      {stat === 'success' && (
        <>
          {checkDateTodo(date) ? (
            <WarningNotVaildDate date={date} checkDateTodo={checkDateTodo} />
          ) : (
            <TodoListContainer>
              <TodoInputForm
                onSubmit={onSubmit}
                onChange={onChange}
                setIsEdit={setIsEdit}
                toDo={toDo}
                date={date}
              />
              <TodoList
                toDos={toDos}
                date={date}
                changeCheck={changeCheck}
                removeToDo={removeToDo}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                userId={userId}
              />
              <TodoProgress total={total} checked={checked} />
            </TodoListContainer>
          )}
        </>
      )}
    </TodoListBody>
  );
};

const TodoListBody = styled.div`
  min-width: 50%;
  @media (max-width: 1200px) {
    min-height: 50%;
    margin-bottom: 50px;
  }
`;
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  padding: 0px 10px 0px 10px;
  border-radius: 1em;
  margin: 10px;
  height: 100%;
`;

export default MyTodoList;
