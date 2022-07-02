import { TodoService } from 'API';

import ItemInput from './ItemInput';
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
  const onSubmit = async event => {
    const newTitle = event.target[1].value;

    event.preventDefault();
    if (newTitle === '') return;
    toDos[isEdit].title = newTitle;

    const result = await TodoService.putTodo(toDos[isEdit]);
    setIsEdit('');
    getToDos(userId);
  };

  return (
    <InputFormBody onSubmit={onSubmit}>
      <Checkbox checked={item.titleCheck} disabled size="small" />
      <ItemInput item={item} />
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

export default TodoEditForm;
