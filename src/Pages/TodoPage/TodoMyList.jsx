import { format } from 'date-fns';
import { TodoService } from 'API';

import Item from './Item';
import ItemInput from './ItemInput';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import OkButton from './OkButton';
import CancelButton from './CancelButton';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const TodoMyList = ({
  toDos,
  date,
  changeCheck,
  removeToDo,
  isEdit,
  setIsEdit,
  getToDos,
  userId,
}) => {
  const today = new Date();

  const onSubmit = async event => {
    const newTitle = event.target[1].value;
    event.preventDefault();
    if (newTitle === '') return;
    toDos[isEdit].title = newTitle;
    const result = await TodoService.putTodo(toDos[isEdit]);
    setIsEdit();
    getToDos(userId);
  };
  // TodoListInputForm 새로운 컴포넌트 분리
  return (
    <TodoMyListBody>
      {toDos.map((item, index) =>
        index === isEdit &&
        format(today, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd') ? (
          <TodoMyListContainer key={index}>
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
          </TodoMyListContainer>
        ) : (
          <TodoMyListContainer key={index}>
            <Checkbox
              onClick={() => changeCheck(index)}
              checked={item.titleCheck}
              disabled={
                format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
              }
              size="small"
            />
            <Item
              item={item}
              index={index}
              changeCheck={changeCheck}
              isCheck={item.titleCheck}
            />
            <EditButton index={index} date={date} setIsEdit={setIsEdit} />
            <DeleteButton date={date} removeToDo={removeToDo} />
          </TodoMyListContainer>
        ),
      )}
    </TodoMyListBody>
  );
};

const TodoMyListBody = styled.div`
  height: 80%;
  margin-top: 2%;
  padding: 1% 3%;
  font-size: 15px;
  overflow: auto;
`;
const TodoMyListContainer = styled.div`
  display: table;
`;
const InputFormBody = styled.form``;

export default TodoMyList;
