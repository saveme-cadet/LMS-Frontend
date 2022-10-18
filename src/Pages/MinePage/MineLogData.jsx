import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { differenceInSeconds, parseISO, format } from 'date-fns';
import { AuthContext } from 'App';
import { MODAL_TYPE, TIMEZONE_OFFSET } from 'Utils/constants';

const formatDate = (date, finalStudyTime) => {
  date = format(new Date(date), 'HH:mm:ss');
  if (finalStudyTime && finalStudyTime === '00:00:00') return '공부 중!';
  else return date;
};

const secondsConverter = timeStamp => {
  const list = timeStamp.split(':');
  return +list[0] * 60 * 60 + +list[1] * 60 + +list[2];
};

const MineLogData = ({ data, index, today, setActiveLogIndex }) => {
  const { modalType, setModalType } = useContext(AuthContext);

  const earnedPoint = (
    secondsConverter(data.finalStudyTime) /
    60 /
    60 /
    8.0
  ).toFixed(2);

  const handleEditLog = () => {
    setModalType(MODAL_TYPE.EDIT);
    setActiveLogIndex(index);
  };

  const handleDelete = e => {
    setModalType(MODAL_TYPE.DELETE);
    setActiveLogIndex(index);
  };

  const isModifiableLog = data => {
    if (data.finalStudyTime === '00:00:00') return false;
    /// 오늘 날짜와 비교했을 때 현재 날짜가 수정 가능 일을 오버했을 경우
    const convertToday = new Date(today - TIMEZONE_OFFSET);
    const convertDate = new Date(
      convertToday.setDate(convertToday.getDate() - 2),
    ).toISOString();
    console.log(convertDate);
    return true;
  };

  return (
    <LogData>
      <div>{formatDate(data.beginTime)}</div>
      <div>{formatDate(data.endTime, data.finalStudyTime)}</div>
      <div>
        {data.finalStudyTime === '00:00:00' ? '공부 중!' : data.finalStudyTime}
      </div>
      <div>{!isNaN(earnedPoint) ? <>{earnedPoint}점</> : <>공부 중!</>}</div>
      <div>
        {isModifiableLog(data) ? (
          <EditButton onClick={handleEditLog}>수정</EditButton>
        ) : (
          <EditButton onClick={handleEditLog} disabled={true}>
            수정
          </EditButton>
        )}
      </div>
      <div>
        {isModifiableLog(data) ? (
          <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
        ) : (
          <DeleteButton onClick={handleDelete} disabled={true}>
            삭제
          </DeleteButton>
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
    pointer-events: none;
  }
`;

const DeleteButton = styled.button`
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  width: 60px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #ff4646;
  color: #ff4646;
  cursor: pointer;
  &:disabled {
    border: 1px solid #a7a7a7;
    color: #a7a7a7;
    pointer-events: none;
  }
`;

export default React.memo(MineLogData);
