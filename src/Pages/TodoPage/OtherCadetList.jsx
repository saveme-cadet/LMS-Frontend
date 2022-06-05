import React, { useState, useEffect} from 'react';
import { TodoService } from 'Network';
import { format } from 'date-fns';

import TodoOtherList from './TodoOtherList';
import { checkDateTodo } from 'Utils';

import styled from 'styled-components';

const OtherTitle = (() => {
  return (<OtherTitleName>👀 다른 카뎃은 무엇을?</OtherTitleName>);
})

const WarningSignNotVaildDate = (() => {
  return (
    <WarningSignDate style={{ color: 'gray' }}>
      아직 진행하지 않은 날짜입니다!
    </WarningSignDate>
  )
})

const OtherCadetList = ({date}) => {
  const [othersToDo, setOthersToDo] = useState([]);

  const getOthers = async () => {
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    // console.log(result.data);
    setOthersToDo(result.data);
  };
  
  useEffect(() => {
    getOthers();
  }, [date]);

  return (
    <TodoOtherBody>
      <OtherTitle />
      {checkDateTodo(date) ? (
        <WarningSignNotVaildDate />
      ) : (
        <TodoOtherList othersToDo={othersToDo} />
      )}
    </TodoOtherBody>
  );
};

const TodoOtherBody = styled.div`
overflow: auto;
flex-wrap: wrap;
background-color: #eeeeee;
border: 1px solid #eeeeee;
padding: 10px;
border-radius: 1em;
flex-direction: column;
width: 50%;
height: 100%;
`
const OtherTitleName = styled.div`
font-size: 25px;
margin-bottom: 10px;
`
const WarningSignDate = styled.div`
justify-content: center;
align-item: center;
text-align: center;
margin-top: 43%;
margin-bottom: 40%;
`

export default React.memo(OtherCadetList);
