import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'App';
import { AojiService, UserInfoService } from 'Network';
import { differenceInSeconds } from 'date-fns';
import { ShowToday } from 'Components';
import Timer from './Timer';
import MineButton from './MineButton';
import MineLog from './MineLog';
import Styled from './MinePage.styled';

const MinePage = () => {
  const [attendScore, setAttendScore] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [aojiLogs, setAojiLogs] = useState(null);
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

  const getMyAoji = async () => {
    const result = await AojiService.getMyAoji(userId);
    const logs = result.data;

    if (logs.length && logs[logs.length - 1].endAt === null) {
      setStartTime(new Date(logs[logs.length - 1].startAt));
    }
    setAojiLogs(logs);
  };

  const onClickAoji = async () => {
    if (startTime && differenceInSeconds(new Date(), startTime) < 1) {
      alert('측정하지 못했습니다!');
      return;
    }
    if (startTime) {
      setStartTime(null);
      await AojiService.putEndAoji(userId);
    } else {
      setStartTime(new Date());
      await AojiService.postStartAoji(userId);
    }
    getMyAoji();
    getCurAttendScore();
  };

  const getCurAttendScore = async () => {
    const result = await UserInfoService.getUserData(userId);
    console.log(result);
    if (result.data) setAttendScore(result.data[0].attendScore.toFixed(2));
  };

  useEffect(() => {
    if (userId) {
      getMyAoji();
      getCurAttendScore();
    }
  }, [userId]);

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
              <Timer startTime={startTime} />
              <MineButton
                onClickAoji={onClickAoji}
                state={startTime === null ? false : true}
              />
            </div>
          </div>
        </Styled.AojiTimer>
        <Styled.AojiLog>
          <MineLog aojiLogs={aojiLogs} attendScore={attendScore} />
        </Styled.AojiLog>
      </Styled.AojiBody>
    </Styled.AojiBackground>
  );
};

export default MinePage;
