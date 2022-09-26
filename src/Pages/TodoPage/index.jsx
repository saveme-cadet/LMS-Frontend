import { useState, useContext } from 'react';
import { CusDatePicker, ShowToday } from 'Components';
import { AuthContext } from 'App';

import MyTodoList from './MyTodoList/MyTodoList';
import OtherCadetList from './OtherCadetList/OtherCadetList';
import styled from 'styled-components';

const TodoPage = () => {
  const auth = useContext(AuthContext);
  const userId = localStorage.getItem('userId');
  const [date, setDate] = useState(new Date());

  // 1. 버튼 통합하기 => <EditButton></Edit>를 리턴하는 객체를 만들기
  // 2. styled component에서도 로직 처리하는 부분은 함수로 만들어 처리하기o
  // 3. 로직이 있는 것만 컴포넌트로 만들기 => 단순히 보여주는 것은 굳이 컴포넌트로 만들 필요가 없음?
  // 4. format(date, 'yyyy-) => Utils에서 관리o
  // 5. list, othercadet을 디렉토리로 구조화하기o
  // 6. 2, 3 뎁스 이상 내려가는 것은 redux를 사용해 전역화하기
  // 7. !==, === 도 일관성
  // 8. progress => 하위 컴포넌트에 스타일 옮기기

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
