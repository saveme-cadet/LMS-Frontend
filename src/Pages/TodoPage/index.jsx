import { useState, useContext } from 'react';
import { CusDatePicker, ShowToday } from 'Components';
import { AuthContext } from 'App';


import TodoList from './TodoList';
import OtherCadetList from './OtherCadetList';
import styled from 'styled-components';


const TodoPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;
  const [date, setDate] = useState(new Date());

  return (
    <TodoMainBackground>
      <TodoHeader>
        <ShowToday date={date} />
        <CusDatePicker date={date} setDate={setDate} isWeekend={true} />
      </TodoHeader>
      <TodoBody>
        <TodoList userId={userId} date={date}/>
        <OtherCadetList date={date}/>
      </TodoBody>
    </TodoMainBackground>
  );
};

const TodoMainBackground = styled.div`
position: relative;
box-sizing: border-box;
padding: 50px;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`
const TodoHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 40px;
font-weight: bold;
margin: 10px;
`
const TodoBody = styled.div`
display: flex;
flex-direction: row;
height: calc(100vh - 183px);
`

export default TodoPage;
