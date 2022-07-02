import { format } from 'date-fns';

import styled from 'styled-components';

const CadetListItem = ({ list, date }) => {
  const today = new Date();

  return list.titleCheck ? (
    <ItemChecked>{list.title}</ItemChecked>
  ) : format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd') ? (
    <ItemNotToday>{list.title}</ItemNotToday>
  ) : (
    <ItemNotChecked>{list.title}</ItemNotChecked>
  );
};

const ItemNotChecked = styled.span``;
const ItemChecked = styled.span`
  color: gray;
  text-decoration-line: line-through;
`;
const ItemNotToday = styled.span`
  color: gray;
`;

export default CadetListItem;
