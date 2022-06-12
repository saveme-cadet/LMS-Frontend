import { format } from 'date-fns';

import Item from './Item';
import DeleteButton from './DeleteButton';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const TodoMyList = ({ toDos, date, changeCheck, removeToDo }) => {
  const today = new Date();

  return (
    <TodoMyListBody>
      {toDos.map((item, index) => (
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
          <DeleteButton today={today} date={date} removeToDo={removeToDo} />
        </TodoMyListContainer>
      ))}
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
