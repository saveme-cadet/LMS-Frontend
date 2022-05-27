import React from 'react';
import { NoData } from 'Components';

import MineLogData from './MineLogData';

function MineLog({ aojiLogs, attendScore }) {
  return (
    <div className="log box">
      <div className="header">⛏️ 보충학습 기록</div>
      <div className="temp row">
        <div>시작 시간</div>
        <div>종료 시간</div>
        <div>공부 시간</div>
        <div>차감 점수</div>
        <div>수정</div>
      </div>

      <div className="body">
        {aojiLogs && aojiLogs.length ? (
          aojiLogs.map(log => {
            return <MineLogData data={log} key={log.aojiTimeIndex} />;
          })
        ) : (
          <NoData code={1} />
        )}
      </div>
      <div className="score">현재 출결 점수 : {attendScore}</div>
    </div>
  );
}

export default MineLog;
