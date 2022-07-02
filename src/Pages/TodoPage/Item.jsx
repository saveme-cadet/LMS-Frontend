import { format } from 'date-fns';

import styled from 'styled-components';

const Item = ({ item, date, index, changeCheck, isCheck }) => {
  const today = new Date();

  return (
    <ListItem
      isCheck={isCheck}
      today={today}
      date={date}
      id={item.todoId}
      onClick={() => changeCheck(index)}
    >
      {item.title}
    </ListItem>
  );
};

const ListItem = styled.span`
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

export default Item;
