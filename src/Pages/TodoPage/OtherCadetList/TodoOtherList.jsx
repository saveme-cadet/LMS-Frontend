import TodoCadetList from './TodoCadetList';

import styled from 'styled-components';

const TodoOtherList = ({ othersToDo, date }) => {
  return (
    <TodoOtherListBody key="index">
      {othersToDo.map((item, index) => (
        <TodoOtherListContainer key={index}>
          <TodoCadetName key={index}>{item.username}</TodoCadetName>
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
  max-width: 100%;
  @media (max-width: 700px) {
    display: block;
  }
`;
const TodoOtherListContainer = styled.div`
  border: 0px;
  padding: 1em;
  border-radius: 1em;
  background-color: white;
  min-width: 100%;
  box-sizing: border-box;
  height: 300px;
  @media (max-width: 700px) {
    margin-bottom: 10px;
  }
`;
const TodoCadetName = styled.span`
  margin-top: -5px;
  font-size: 20px;
`;

export default TodoOtherList;
