import styled from 'styled-components';

import TodoCadetList from './TodoCadetList';

const TodoOtherList = ({othersToDo}) => {

  const TodoCadetName = (({index, item}) => {
    return (
      <TodoCadetNames key={index}>
        {item.userName}
      </TodoCadetNames>
    );
  })

  return (
    <TodoOtherListBody key="index">
    {othersToDo.map((item, index) => (
      <TodoOtherListContainer key={index}>
        <TodoCadetName index={index} item={item}/>
        <TodoCadetList item={item}/>
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
`
const TodoOtherListContainer = styled.div`
border: 0px;
padding: 1em;
border-radius: 1em;
background-color: white;
width: 100%;
box-sizing: border-box;
height: 300px;
`
const TodoCadetNames = styled.div`
margin-top: -5px;
font-size: 20px;
`

export default TodoOtherList;