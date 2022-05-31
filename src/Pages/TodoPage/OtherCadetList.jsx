import React, { useState, useEffect} from 'react';

import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

import { TodoService } from 'Network';
import { format } from 'date-fns';

const OtherCadetTitle = (() => {
  return (<OtherCadetTitleName>👀 다른 카뎃은 무엇을?</OtherCadetTitleName>);
})

const WarningSignBeforeApril = (() => {
  return (
    <WarningSignDate style={{ color: 'gray' }}>
      진행하지 않은 날짜입니다!
    </WarningSignDate>
  );
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

const WarningSignAfterToday = (() => {
  return (
    <WarningSignDate style={{ color: 'gray' }}>
      아직 진행하지 않은 날짜입니다!
    </WarningSignDate>
  )
})

const OtherCadetName = (({index, item}) => {
  return (
    <OtherCadetNames key={index}>
      {item.userName}
    </OtherCadetNames>
  );
})

const OtherCadetListCheckbox = (({list}) => {
  return (
    <OtherCadetListCheckboxes>
    {list.titleCheck === true ? (
      <Checkbox
        defaultChecked
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 17 },
        }}
        disabled
      />
    ) : (
      <Checkbox
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 17 },
        }}
        disabled
      />
    )}
  </OtherCadetListCheckboxes>
  );
})

const OtherCadetListObject = (({list}) => {
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
    <TodoOtherCadetBody>
      <OtherCadetTitle />
      {format(new Date('2022-04-03'), 'yyyy-MM-dd') > format(date, 'yyyy-MM-dd') ? (
      <WarningSignBeforeApril />) : ('')}
      {format(today, 'yyyy-MM-dd') >= format(date, 'yyyy-MM-dd') ? (
      <TodoOtherCadetListBody key="index">
      {othersToDo.map((item, index) => (
        <TodoOtherCadetListContainer key={index}>
          <OtherCadetName index={index} item={item}/>
          <TodoEachCadetListBody>
            {item.todoDtoList.length === 0 ? (
              <WarningSignNoList />
            ) : (
              <TodoEachCadetListContainer>
                {item.todoDtoList.map((list, index) => (
                  <TodoEachCadetListEntity key={index}>
                    <OtherCadetListCheckbox list={list}/>
                    <OtherCadetListObject list={list}/>
                  </TodoEachCadetListEntity>
                ))}
              </TodoEachCadetListContainer>
            )}
          </TodoEachCadetListBody>
        </TodoOtherCadetListContainer>
      ))}
        </TodoOtherCadetListBody>
      ) : (
        <WarningSignAfterToday />
      )}
    </TodoOtherCadetBody>
  );
};

const TodoOtherCadetBody = styled.div`
overflow: auto;
flex-wrap: wrap;
background-color: #eeeeee;
border: 1px solid #eeeeee;
padding: 10px;
border-radius: 1em;
flex-direction: column;
width: 50%;
`
const TodoOtherCadetListBody = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
padding: 10px;
margin-bottom: 10px;
`
const TodoOtherCadetListContainer = styled.div`
border: 0px;
padding: 1em;
border-radius: 1em;
background-color: white;
width: 100%;
box-sizing: border-box;
height: 300px;
`
const TodoEachCadetListBody = styled.div`
overflow: auto;
margin-top: 5%;
margin-left: 5%;
height: 80%;
`
const TodoEachCadetListContainer = styled.div`
`
const TodoEachCadetListEntity = styled.div`
`
const OtherCadetTitleName = styled.div`
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
justify-content: center;
align-item: center;
text-align: center;
margin-top: 45%;
margin-left: -5%;
`
const OtherCadetNames = styled.div`
margin-top: -5px;
font-size: 20px;
`
const OtherCadetListCheckboxes = styled.span`
margin-left: -10px;
margin-bottom: -5px;
`

export default React.memo(OtherCadetList);
