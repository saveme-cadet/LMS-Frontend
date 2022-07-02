import { format } from 'date-fns';

import styled from 'styled-components';

const CadetListItem = ({ list, date }) => {
  const today = new Date();

  return (
    <ListItem list={list} today={today} date={date}>
      {list.title}
    </ListItem>
  );
};

const ListItem = styled.span`
  color: ${props =>
    format(props.today, 'yyyy-MM-dd') !== format(props.date, 'yyyy-MM-dd') ||
    props.list.titleCheck
      ? 'gray'
      : ''};
  text-decoration-line: ${props =>
    props.list.titleCheck ? 'line-through' : ''};
`;

export default CadetListItem;
