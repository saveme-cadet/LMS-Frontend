import { format } from 'date-fns';

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
  setToDos,
  date,
  changeCheck,
  removeToDo,
  isEdit,
  setIsEdit,
  getTodos,
}) => {
  const today = new Date();

  return (
    <TodoMyListBody>
      {toDos.map((item, index) =>
        index === isEdit ? (
          <TodoMyListContainer key={index}>
            <Checkbox checked={item.titleCheck} disabled size="small" />
            <ItemInput item={item} />
            <OkButton
              date={date}
              index={index}
              setIsEdit={setIsEdit}
              setToDos={setToDos}
              getTodos={getTodos}
            />
            <CancelButton date={date} setIsEdit={setIsEdit} />
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

export default TodoMyList;
