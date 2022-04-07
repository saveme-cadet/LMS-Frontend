import { useState, useEffect, useContext, useRef } from 'react';

import { AuthContext } from 'App';
import { AojiService, UserInfoService } from 'Network';
import { useInterval } from 'Utils';
import { differenceInSeconds } from 'date-fns';

import { NoData, ShowToday } from 'Components';
import Timer from './Timer';
import AojiButton from './AojiButton';
import AojiLog from './AojiLog';

import Styled from './MinePage.styled';

const MinePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDoing, setIsDoing] = useState(false);
  const [aojiLogs, setAojiLogs] = useState(null);
  const [attendScore, setAttendScore] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(new Date());
  const date = new Date();
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;
  const interv = useRef();
  const clockStart = () => {
    // console.log('called!');
    if (interv.current) {
      clearInterval(interv.current);
      interv.current = null;
    }
    interv.current = setInterval(() => {
      // console.log('timer!');
      // console.log('why?');
      setNow(new Date());
    }, 1000);
  };

  const handleClickButton = async () => {
    // console.log(differenceInSeconds(now, startTime));
    // -0 이 나올 경우 DB가 고장나버림
    if (startTime && differenceInSeconds(now, startTime) < 1) {
      alert('측정하지 못했습니다!');
      return;
    }
    let result;
    if (isDoing) {
      // console.log('clearrr');
      clearInterval(interv.current);
      interv.current = null;
      setStartTime(null);
      result = await AojiService.putEndAoji(userId);
    } else {
      setStartTime(new Date());
      // console.log('call handleClickButton');
      clockStart();
      result = await AojiService.postStartAoji(userId);
    }
    // console.log(result.data);
    setIsDoing(!isDoing);
    getMyAoji();
    getCurAttendScore();
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  const getMyAoji = async isFirst => {
    const result = await AojiService.getMyAoji(userId);
    const logs = result.data;
    let doingState = false;
    // console.log(logs);
    logs.map(log => {
      if (log.endAt === null) doingState = true;
    });
    if (doingState) {
      // console.log('is doing');
      // console.log('call getMyAoji');
      clockStart();
      const fotmatDate = new Date(logs[logs.length - 1].startAt);
      setStartTime(fotmatDate);
    }
    setAojiLogs(logs);
    setIsDoing(doingState);
  };

  const getCurAttendScore = async () => {
    const result = await UserInfoService.getAllUser(userId);
    const curUser = result.data.find(array => array.userId === userId);
    setAttendScore(curUser.attendScore.toFixed(2));
  };

  useEffect(() => {
    getMyAoji();
    getCurAttendScore();
    return () => {
      clearInterval(interv.current);
      interv.current = null;
    };
  }, []);

  return (
    <Styled.AojiBackground>
      <div className="time">
        <ShowToday date={date} />
      </div>
      <Styled.AojiBody>
        <Styled.AojiTimer>
          <div className="timer box">
            <div className="header">⛏️ 보충학습 시작</div>
            <div className="body">
              <Timer startTime={startTime} now={now} />

              <AojiButton onClickAoji={handleClickButton} state={isDoing} />
            </div>
          </div>
        </Styled.AojiTimer>
        <Styled.AojiLog>
          <div className="log box">
            <div className="header">⛏️ 보충학습 기록</div>
            <div className="temp row">
              <div>시작 시간</div>
              <div>종료 시간</div> <div>공부 시간</div> <div>차감 점수</div>
              <div className=""></div>
            </div>

            <div className="body">
              {aojiLogs && aojiLogs.length ? (
                aojiLogs.map(log => {
                  return <AojiLog data={log} key={log.aojiTimeIndex} />;
                })
              ) : (
                <NoData code={1} />
              )}
            </div>
            <div className="score">현재 출결 점수 : {attendScore}</div>
          </div>
        </Styled.AojiLog>

        {/* {isOpen === 0 && <Modal />} */}
      </Styled.AojiBody>
    </Styled.AojiBackground>
  );
};

export default MinePage;
