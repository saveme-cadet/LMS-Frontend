import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from 'App';
import { AojiService, UserInfoService } from 'API';
import { differenceInSeconds } from 'date-fns';
import { ShowToday } from 'Components';
import Timer from './Timer';
import MineButton from './MineButton';
import MineLog from './MineLog';

const MinePage = () => {
  const [attendScore, setAttendScore] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [mineLogs, setMineLogs] = useState(null);
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

  const getMyMine = async () => {
    const result = await AojiService.getMyAoji(userId);
    const logs = result.data;

    if (logs.length && logs[logs.length - 1].endAt === null) {
      setStartTime(new Date(logs[logs.length - 1].startAt));
    }
    setMineLogs(logs);
  };

  const onClickMine = async () => {
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
    getMyMine();
    getCurAttendScore();
  };

  const getCurAttendScore = async () => {
    const result = await UserInfoService.getUserData(userId);
    if (result.data) setAttendScore(result.data[0].attendScore.toFixed(2));
  };

  useEffect(() => {
    if (userId) {
      getMyMine();
      getCurAttendScore();
    }
  }, [userId]);

  return (
    <MineBackground>
      <div className="time">
        <ShowToday date={new Date()} />
      </div>
      <MineBody>
        <MineTimer>
          <MineTimerWrap>
            <MineHeader>⛏️ 보충학습 시작</MineHeader>
            <MineTimeBody>
              <Timer startTime={startTime} />
              <MineButton
                onClickMine={onClickMine}
                state={startTime === null ? false : true}
              />
            </MineTimeBody>
          </MineTimerWrap>
        </MineTimer>
        <MineLog mineLogs={mineLogs} attendScore={attendScore} />
      </MineBody>
    </MineBackground>
  );
};

const MineBackground = styled.div`
  padding: 0 30px;
`;

const MineTimerWrap = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  text-align: left;
`;

const MineBody = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const MineTimer = styled.div`
  flex: 1;
  font-size: 30px;
  font-weight: bold;
  height: 400px;
`;

const MineHeader = styled.h2`
  font-size: 30px;
  font-weight: bold;
`;

const MineTimeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

export default MinePage;
