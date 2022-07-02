import { format } from 'date-fns';

import styled from 'styled-components';

const Item = ({ item, date, index, changeCheck, isCheck }) => {
  const today = new Date();

  return isCheck ? (
    <ItemChecked id={item.todoId} onClick={() => changeCheck(index)}>
      {item.title}
    </ItemChecked>
  ) : format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd') ? (
    <ItemNotToday id={item.todoId} onClick={() => changeCheck(index)}>
      {item.title}
    </ItemNotToday>
  ) : (
    <ItemNotChecked id={item.todoId} onClick={() => changeCheck(index)}>
      {item.title}
    </ItemNotChecked>
  );
};

const ItemNotChecked = styled.span`
  cursor: default;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;
const ItemChecked = styled.span`
  color: gray;
  text-decoration-line: line-through;
  cursor: default;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;
const ItemNotToday = styled.span`
  color: gray;
  cursor: default;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default Item;
