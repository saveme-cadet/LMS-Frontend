import { useState, useContext } from 'react';

import { CusDatePicker, ShowToday } from 'Components';
import { isFutureTodo } from 'Utils';
import WrongDay from './WrongDay';

import { AuthContext } from 'App';
import Styled from './TodoPage.styled';

import TodoList from './TodoList';
import OtherCadetList from './OtherCadetList';


const TodoPage = () => {
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;
  const [date, setDate] = useState(new Date());

  return (
    <Styled.MainBackground>
      <div className="time">
        <ShowToday date={date} />
        <CusDatePicker date={date} setDate={setDate} isWeekend={true} />
      </div>
      <div className="main">
        {isFutureTodo(date) ? (
          <div className="todo">
            <WrongDay wrongType={isFutureTodo(date)} />
          </div>
        ) : (
          <TodoList userId={userId} date={date}/>
        )}
        <OtherCadetList date={date}/>
      </div>
    </Styled.MainBackground>
  );
};

export default TodoPage;
