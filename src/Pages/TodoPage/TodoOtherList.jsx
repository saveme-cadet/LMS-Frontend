import TodoCadetList from './TodoCadetList';
import TodoCadetName from './TodoCadetName';

import styled from 'styled-components';

const TodoOtherList = ({ othersToDo, date }) => {
  return (
    <TodoOtherListBody key="index">
      {othersToDo.map((item, index) => (
        <TodoOtherListContainer key={index}>
          <TodoCadetName index={index} item={item} />
          <TodoCadetList item={item} date={date} />
        </TodoOtherListContainer>
      ))}
    </TodoOtherListBody>
  );
};

const TodoOtherListBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;
const TodoOtherListContainer = styled.div`
  border: 0px;
  padding: 1em;
  border-radius: 1em;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  height: 300px;
`;

export default TodoOtherList;
