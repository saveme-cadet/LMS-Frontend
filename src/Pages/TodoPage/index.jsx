import { useState, useContext } from 'react';
import { CusDatePicker, ShowToday } from 'Components';
import { AuthContext } from 'App';

import MyTodoList from './MyTodoList';
import OtherCadetList from './OtherCadetList';
import styled from 'styled-components';

const TodoPage = () => {
  const auth = useContext(AuthContext);
  const userId = localStorage.getItem('userId');
  const [date, setDate] = useState(new Date());

  // TODO
  // 1. 요일 별 Warning 수정o
  // 2. 입력이 "   " 일 때 예외 처리o
  // 3. 다른 카뎃 정보 불러오기 API 수정o
  // 4. 파일 줄이기
  // 5. 수정 esc 키 추가하기o
  // 6. div string을 보여줄 떄 space가 출력되지 않는 문제o
  // 7. todo delete할 떄 연속으로 누르면 404 => 어디서 처리?
  // 리액트 쿼리를 이용하면 해결할 수 있음

  return (
    <TodoMainBackground>
      <TodoHeader>
        <ShowToday date={date} />
        <CusDatePicker date={date} setDate={setDate} isWeekend={true} />
      </TodoHeader>
      <TodoBody>
        <MyTodoList userId={userId} date={date} />
        <OtherCadetList date={date} />
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
`;

export default TodoPage;
