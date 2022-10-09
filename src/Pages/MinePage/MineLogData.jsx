import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { differenceInSeconds, parseISO, format } from 'date-fns';
import { AuthContext } from 'App';
import { MODAL_TYPE } from 'Utils/constants';

const formatDate = (date, finalStudyTime) => {
  date = format(new Date(date), 'HH:mm:ss');
  if (finalStudyTime && finalStudyTime === '00:00:00') return '공부 중!';
  else return date;
};

const secondsConverter = timeStamp => {
  const list = timeStamp.split(':');
  return +list[0] * 60 * 60 + +list[1] * 60 + +list[2];
};

const MineLogData = ({ data, index, setActiveLogIndex }) => {
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

  return (
    <LogData>
      <div>{formatDate(data.beginTime)}</div>
      <div>{formatDate(data.endTime, data.finalStudyTime)}</div>
      <div>
        {data.finalStudyTime === '00:00:00' ? '공부 중!' : data.finalStudyTime}
      </div>
      <div>{!isNaN(earnedPoint) ? <>{earnedPoint}점</> : <>공부 중!</>}</div>
      <div>
        {data.finalStudyTime !== '00:00:00' ? (
          <EditButton onClick={handleEditLog}>수정</EditButton>
        ) : (
          <EditButton onClick={handleEditLog} disabled={true}>
            수정
          </EditButton>
        )}
      </div>
      <div>
        {data.finalStudyTime !== '00:00:00' ? (
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
