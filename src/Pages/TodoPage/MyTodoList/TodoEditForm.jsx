import { useState } from 'react';
import { TodoService } from 'API';

import OkButton from './OkButton';
import CancelButton from './CancelButton';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const TodoEditForm = ({
  item,
  date,
  index,
  isEdit,
  setIsEdit,
  toDos,
  userId,
  getToDos,
}) => {
  const [title, setTitle] = useState(item.title);

  const onSubmit = async event => {
    const newTitle = event.target[1].value;
    const selected = toDos[index];

    event.preventDefault();
    if (newTitle.trim() === '') return;

    const result = await TodoService.patchTodo(userId, selected.todoId, {
      title: newTitle.trim(),
      titleCheck: selected.titleCheck,
    });
    setIsEdit('');
    getToDos(userId);
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
      <OkButton
        date={date}
        index={index}
        setIsEdit={setIsEdit}
        toDos={toDos}
        userId={userId}
        getToDos={getToDos}
      />
      <CancelButton date={date} setIsEdit={setIsEdit} />
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
