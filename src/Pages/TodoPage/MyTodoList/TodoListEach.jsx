import Buttons from './Buttons';
import isToday from 'Utils/isToday';
import { color, lineThrough } from 'Utils/TodoCss';

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
        disabled={!isToday(today, date)}
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
      <Buttons
        type={'Edit'}
        date={date}
        callback={() => {
          setIsEdit(index);
        }}
      />
      <Buttons type={'Delete'} date={date} callback={removeToDo} />
    </TodoListEachBody>
  );
};

const TodoListEachBody = styled.div``;
const Item = styled.span`
  color: ${props => color(props, props.isCheck)};
  text-decoration-line: ${props => lineThrough(props.isCheck)};
  cursor: default;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default TodoListEach;
