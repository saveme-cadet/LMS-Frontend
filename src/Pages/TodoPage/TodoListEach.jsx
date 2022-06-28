import { format } from 'date-fns';

import Item from './Item';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const TodoListEach = ({
  item,
  index,
  changeCheck,
  date,
  setIsEdit,
  removeToDo,
}) => {
  const today = new Date();
  return (
    <TodoListEachBody>
      <Checkbox
        onClick={() => changeCheck(index)}
        checked={item.titleCheck}
        disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
        size="small"
      />
      <Item
        item={item}
        date={date}
        index={index}
        changeCheck={changeCheck}
        isCheck={item.titleCheck}
      />
      <EditButton index={index} date={date} setIsEdit={setIsEdit} />
      <DeleteButton date={date} removeToDo={removeToDo} />
    </TodoListEachBody>
  );
};

const TodoListEachBody = styled.div``;

export default TodoListEach;
