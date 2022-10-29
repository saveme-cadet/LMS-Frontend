import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from 'App';
import { MineService, AllTableService } from 'API';
import { differenceInSeconds, format } from 'date-fns';
import { ShowToday } from 'Components';
import Timer from './Timer';
import MineButton from './MineButton';
import MineLog from './MineLog';
import MineEditModal from './MineEditModal';
import DailyDate from './DailyDate';
import MinePeople from './MinePeople';
import { MODAL_TYPE } from 'Utils/constants';
import { Modal } from '@mui/material';
import MineDeleteModal from './MineDeleteModal';

const MinePage = () => {
  const { modalType } = useContext(AuthContext);
  const [beginTime, setBeginTime] = useState(null);
  const [mineLogs, setMineLogs] = useState(null);
  const [activeLogIndex, setActiveLogIndex] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [today, setToday] = useState(new Date());

  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

  const getMyMine = async () => {
    const result = await MineService.getFindMine(
      userId,
      format(date, 'yyyy-MM-dd'),
    );
    const logs = result.data;
    if (logs.length && logs[logs.length - 1].finalStudyTime === '00:00:00') {
      setBeginTime(logs[logs.length - 1].beginTime);
    }
    setMineLogs(logs);
  };

  const onClickMine = async () => {
    if (beginTime && differenceInSeconds(new Date(), new Date(beginTime)) < 1) {
      alert('측정하지 못했습니다!');
      return;
    }
    if (beginTime) {
      await MineService.putEndMine(userId);
      setBeginTime(null);
    } else {
      // setBeginTime(new Date()); // TODO: twice init beginTime
      await MineService.postStartMine(userId);
    }
    getMyMine();
  };

  useEffect(() => {
    if (userId) {
      getMyMine();
    }
  }, [userId, date]);

  return (
    <MineBackground>
      <div className="time">
        <DailyDate date={date} setDate={setDate} />
      </div>
      <MinePeople beginTime={beginTime} />
      <MineBody>
        <MineTimer>
          <MineTimerWrap>
            <MineHeader>⛏️ 보충학습 시작</MineHeader>
            <MineTimeBody>
              <Timer beginTime={beginTime} />
              <MineButton
                onClickMine={onClickMine}
                state={beginTime === null ? false : true}
                date={date}
              />
            </MineTimeBody>
          </MineTimerWrap>
        </MineTimer>
        <MineLog
          today={today}
          mineLogs={mineLogs}
          setActiveLogIndex={setActiveLogIndex}
        />
      </MineBody>
      {modalType === MODAL_TYPE.EDIT && (
        <MineEditModal
          data={mineLogs[activeLogIndex]}
          setActiveLogIndex={setActiveLogIndex}
          getMyMine={getMyMine}
        />
      )}
      {modalType === MODAL_TYPE.DELETE && (
        <MineDeleteModal
          data={mineLogs[activeLogIndex]}
          setActiveLogIndex={setActiveLogIndex}
          getMyMine={getMyMine}
        />
      )}
    </MineBackground>
  );
};

const MineBackground = styled.div`
  padding: 0 30px;
`;

const MineTimerWrap = styled.div`
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
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
