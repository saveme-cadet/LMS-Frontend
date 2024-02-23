import { useState } from 'react';
import { CusDatePicker } from 'Components';

import MyTodoList from './MyTodoList/MyTodoList';
import OtherCadetList from './OtherCadetList/OtherCadetList';
import styled from 'styled-components';

const TodoPage = () => {
  const username = localStorage.getItem('username');
  const [date, setDate] = useState(new Date());

  return (
    <TodoMainBackground>
      <TodoHeader>
        <CusDatePicker date={date} setDate={setDate} isWeekend={true} />
      </TodoHeader>
      <TodoBody>
        <MyTodoList username={username} date={date} />
        <OtherCadetList date={date} />
      </TodoBody>
    </TodoMainBackground>
  );
};

const TodoMainBackground = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px 50px 0px 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const TodoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
`;
const TodoBody = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 183px);
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export default TodoPage;
