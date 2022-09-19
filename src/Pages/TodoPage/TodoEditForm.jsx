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

    event.preventDefault();
    if (newTitle === '') return;
    toDos[isEdit].title = newTitle;

    const result = await TodoService.patchTodo(userId, toDos[index].todoId, {
      title: newTitle,
      titleCheck: toDos[index].titleCheck,
    });
    setIsEdit('');
    getToDos(userId);
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
