import React from 'react';
import styled from 'styled-components';
import { differenceInSeconds, parseISO, format } from 'date-fns';

const formatDate = date => {
  if (!date) return '공부 중!';
  date = new Date(date);

  return format(date, 'HH:mm:ss');
};

const formatRecord = record => {
  if (record === 'doing study') return '00:00:00';
  const arr = record.split(':');
  const newRecord = arr.map(i => {
    return parseInt(i) < 10 ? '0' + i : i;
  });

  return newRecord.join(':');
};
const MineLogData = ({ data }) => {
  const earnedPoint = (
    differenceInSeconds(parseISO(data.endAt), parseISO(data.startAt)) /
    60 /
    60 /
    8.0
  ).toFixed(2);

  const handleEditLog = () => {
    alert('준비중입니다!');
  };

  return (
    <LogData>
      <div>{formatDate(data.startAt)}</div>
      <div>{formatDate(data.endAt)}</div>
      <div>{formatRecord(data.recodeTime)}</div>
      <div>{!isNaN(earnedPoint) ? <>{earnedPoint}점</> : <>공부 중!</>}</div>
      <div>
        {data.endAt ? (
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