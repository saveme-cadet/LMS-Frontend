import { useState, useEffect, useContext, useRef } from 'react';

import { AuthContext } from 'App';
import { AojiService, UserInfoService } from 'Network';
import { differenceInSeconds } from 'date-fns';

import { ShowToday } from 'Components';
import Timer from './Timer';
import AojiButton from './AojiButton';
import AojiLog from './AojiLog';

import Styled from './MinePage.styled';

const MinePage = () => {
  const [isDoing, setIsDoing] = useState(false);
  const [attendScore, setAttendScore] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(new Date());
  const [aojiLogs, setAojiLogs] = useState(null);
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;
  let timer;

  const getMyAoji = async () => {
    const result = await AojiService.getMyAoji(userId);
    const logs = result.data;

    if (logs.length && logs[logs.length - 1].endAt === null) {
      clockStart();
      setStartTime(new Date(logs[logs.length - 1].startAt));
      setIsDoing(true);
    }
    setAojiLogs(logs);
  };

  const clockStart = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
  };

  const handleClickButton = async () => {
    if (startTime && differenceInSeconds(now, startTime) < 1) {
      alert('측정하지 못했습니다!');
      return;
    }
    if (isDoing) {
      clearInterval(timer);
      timer = null;
      setStartTime(null);
      await AojiService.putEndAoji(userId);
    } else {
      setStartTime(new Date());
      clockStart();
      await AojiService.postStartAoji(userId);
    }
    setIsDoing(!isDoing);
    getMyAoji();
    getCurAttendScore();
  };

  const getCurAttendScore = async () => {
    if (userId) {
      const result = await UserInfoService.getUserData(userId);
      if (result.attendScore) setAttendScore(result.attendScore.toFixed(2));
    }
  };

  useEffect(() => {
    getMyAoji();
    getCurAttendScore();
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, []);

  return (
    <Styled.AojiBackground>
      <div className="time">
        <ShowToday date={new Date()} />
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
          <AojiLog aojiLogs={aojiLogs} attendScore={attendScore} />
        </Styled.AojiLog>
      </Styled.AojiBody>
    </Styled.AojiBackground>
  );
};

export default MinePage;
