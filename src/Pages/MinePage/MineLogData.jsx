import React from 'react';
import styled from 'styled-components';
import { differenceInSeconds, parseISO, format } from 'date-fns';

const formatDate = date => {
  return date === '00:00:00' ? '공부 중!' : date;
};

const secondsConverter = timeStamp => {
  const list = timeStamp.split(':');
  return +list[0] * 60 * 60 + +list[1] * 60 + +list[2];
};

const MineLogData = ({ data }) => {
  const earnedPoint = (
    secondsConverter(data.finalStudyTime) /
    60 /
    60 /
    8.0
  ).toFixed(2);

  const handleEditLog = () => {
    alert('준비중입니다!');
  };

  return (
    <LogData>
      <div>{data.beginTime}</div>
      <div>{formatDate(data.endTime)}</div>
      <div>{formatDate(data.finalStudyTime)}</div>
      <div>{!isNaN(earnedPoint) ? <>{earnedPoint}점</> : <>공부 중!</>}</div>
      <div>
        {data.endTime !== '00:00:00' ? (
          <EditButton onClick={handleEditLog}>수정</EditButton>
        ) : (
          <EditButton onClick={handleEditLog} disabled={true}>
            수정
          </EditButton>
        )}
      </div>
    </LogData>
  );
};

const LogData = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  * {
    flex: 1 1;
    text-align: center;
    margin: 15px 0 15px 0;
  }
`;

const EditButton = styled.button`
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  width: 60px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #4870fd;
  color: #4870fd;
  cursor: pointer;
  &:disabled {
    border: 1px solid #a7a7a7;
    color: #a7a7a7;
  }
`;

export default React.memo(MineLogData);
