import React, { useState, useEffect} from 'react';
import { TodoService } from 'Network';
import { format } from 'date-fns';

import { checkDateTodo } from 'Utils';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const OtherTitle = (() => {
  return (<OtherTitleName>👀 다른 카뎃은 무엇을?</OtherTitleName>);
})

const WarningSignNoList = (() => {
  return (
    <WarningSignList>
      <span style={{ color: 'gray' }}>
       등록된 할 일이 없습니다!
      </span>
    </WarningSignList>
  );
})

const WarningSignNotVaildDate = (() => {
  return (
    <WarningSignDate style={{ color: 'gray' }}>
      아직 진행하지 않은 날짜입니다!
    </WarningSignDate>
  )
})

const OtherName = (({index, item}) => {
  return (
    <OtherNames key={index}>
      {item.userName}
    </OtherNames>
  );
})

const OtherListCheckbox = (({list}) => {
  return (
    <OtherListCheckboxes>
    {list.titleCheck === true ? (
      <Checkbox
        defaultChecked
        size="small"
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 15 },
        }}
        disabled
      />
    ) : (
      <Checkbox
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 15 },
        }}
        disabled
      />
    )}
  </OtherListCheckboxes>
  );
})

const OtherListObject = (({list}) => {
  return (
    <span>
      {list.titleCheck === false ? (
        <span>{list.title}</span>
      ) : (
        <span
          style={{
            textDecorationLine: 'line-through',
            color: 'gray',
         }}
       >
         {list.title}
       </span>
      )}
    </span>
  );
})

const OtherCadetList = ({date}) => {
  const [othersToDo, setOthersToDo] = useState([]);
  const today = new Date();

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
        <TodoOtherListBody key="index">
        {othersToDo.map((item, index) => (
          <TodoOtherListContainer key={index}>
            <OtherName index={index} item={item}/>
            <TodoEachListBody>
              {item.todoDtoList.length === 0 ? (
                <WarningSignNoList />
              ) : (
                <TodoEachListContainer>
                  {item.todoDtoList.map((list, index) => (
                    <TodoEachListEntity key={index}>
                      <OtherListCheckbox list={list}/>
                      <OtherListObject list={list}/>
                    </TodoEachListEntity>
                  ))}
                </TodoEachListContainer>
              )}
            </TodoEachListBody>
          </TodoOtherListContainer>
        ))}
          </TodoOtherListBody>
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
const TodoEachListBody = styled.div`
overflow: auto;
margin-top: 5%;
margin-left: 5%;
height: 80%;
`
const TodoEachListContainer = styled.div`
`
const TodoEachListEntity = styled.div`
display: table;
`
const OtherTitleName = styled.div`
font-size: 25px;
margin-bottom: 10px;
`
const WarningSignDate = styled.div`
justify-content: center;
align-item: center;
text-align: center;
margin-top: 50%;
`
const WarningSignList = styled.div`
text-align: center;
// vertical-align: middle;
margin-top: 80px;
margin-left: -5%;
`
const OtherNames = styled.div`
margin-top: -5px;
font-size: 20px;
`
const OtherListCheckboxes = styled.span`
margin-left: -10px;
margin-bottom: -5px;
`

export default React.memo(OtherCadetList);
