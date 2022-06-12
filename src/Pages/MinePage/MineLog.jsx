import React from 'react';
import styled from 'styled-components';
import { NoData } from 'Components';

import MineLogData from './MineLogData';

function MineLog({ mineLogs, attendScore }) {
  return (
    <MineLogContainer>
      <MineHeader>⛏️ 보충학습 기록</MineHeader>
      <MineLogColumn>
        <div>시작 시간</div>
        <div>종료 시간</div>
        <div>공부 시간</div>
        <div>차감 점수</div>
        <div>수정</div>
      </MineLogColumn>

      <MineLogRow>
        {mineLogs && mineLogs.length ? (
          mineLogs.map((log, index) => {
            return <MineLogData data={log} key={index} />;
          })
        ) : (
          <NoData code={1} />
        )}
      </MineLogRow>
      <MineScore>현재 출결 점수 : {attendScore}</MineScore>
    </MineLogContainer>
  );
}

const MineLogContainer = styled.div`
  flex: 1;
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  text-align: left;
`;

const MineHeader = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const MineLogColumn = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  & div {
    flex: 1 1;
    text-align: center;
    margin: 15px 0 15px 0;
    font-weight: bold;
  }
`;

const MineLogRow = styled.div`
  overflow: auto;
  align-items: center;
  max-height: 400px;
  @media (min-width: 1200px) {
    height: 400px;
  }
`;

const MineScore = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 10px;
`;

export default MineLog;
