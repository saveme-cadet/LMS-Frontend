import { useState } from 'react';
import { useQueryClient } from 'react-query';

import { TodoService } from 'API';
import Buttons from './Buttons';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const TodoEditForm = ({
  item,
  date,
  index,
  isEdit,
  setIsEdit,
  toDos,
  username,
  patchTodo,
}) => {
  const [title, setTitle] = useState(item.title);

  const client = useQueryClient();

  const onSubmit = async event => {
    const newTitle = event.target[1].value;
    const selected = toDos[index];

    event.preventDefault();
    if (newTitle.trim() === '') return;

    patchTodo.mutate([
      username,
      selected.todoId,
      {
        title: newTitle.trim(),
        titleCheck: selected.titleCheck,
      },
    ]);
    setIsEdit('');
  };

  const pressKey = event => {
    const total = toDos.length - 1;

    if (event.key === 'Escape' || event.key === 'Esc') {
      setIsEdit(false);
    } else if (event.key === 'ArrowDown') {
      setIsEdit(isEdit === total ? total : isEdit + 1);
    } else if (event.key == 'ArrowUp') {
      setIsEdit(isEdit === 0 ? 0 : isEdit - 1);
    }
  };

  const editTitle = async event => {
    const newTitle = event.target.closest('form')[1].value;

    if (newTitle === '') return;

    patchTodo.mutate([
      username,
      toDos[index].todoId,
      {
        title: newTitle.trim(),
        titleCheck: toDos[index].titleCheck,
      },
    ]);
    setIsEdit();
    client.invalidateQueries(['todos', date]);
  };

  return (
    <InputFormBody onSubmit={onSubmit}>
      <Checkbox checked={item.titleCheck} disabled size="small" />
      <ItemInput
        id="name"
        autoFocus
        autoComplete="off"
        value={title}
        onChange={event => {
          setTitle(event.target.value);
        }}
        onKeyDown={pressKey}
      />
      <Buttons type={'Ok'} date={date} callback={editTitle} />
      <Buttons
        type={'Cancel'}
        date={date}
        callback={() => {
          setIsEdit('');
        }}
      />
    </InputFormBody>
  );
};

const InputFormBody = styled.form``;
const ItemInput = styled.input`
  width: 300px;
  height: 20px;
  margin-left: 10px;
  outline-width: 0;
  font-size: 15px;
`;

export default TodoEditForm;
