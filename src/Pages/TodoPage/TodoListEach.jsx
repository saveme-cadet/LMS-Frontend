import { format } from 'date-fns';

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
        isCheck={item.titleCheck}
        today={today}
        date={date}
        id={item.todoId}
        onClick={() => changeCheck(index)}
      >
        {item.title.replace(/ /g, '\u00a0')}
      </Item>
      <EditButton index={index} date={date} setIsEdit={setIsEdit} />
      <DeleteButton date={date} removeToDo={removeToDo} />
    </TodoListEachBody>
  );
};

const TodoListEachBody = styled.div``;
const Item = styled.span`
  color: ${props =>
    format(props.today, 'yyyy-MM-dd') !== format(props.date, 'yyyy-MM-dd') ||
    props.isCheck
      ? 'gray'
      : ''};
  text-decoration-line: ${props => (props.isCheck ? 'line-through' : '')};
  cursor: default;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default TodoListEach;
