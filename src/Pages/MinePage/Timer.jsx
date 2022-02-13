import * as React from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import Styled from './Timer.styled';
import { useState } from 'react';
import { useScrollTrigger } from '@mui/material';

const Timer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [startTime, setStartTime] = useState([]);
  const [finishTime, setFinishTime] = useState([]);
  const [interv, setInterv] = useState(0);
  const [status, setStatus] = useState(0);

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const monthEngToNum = Eng => {
    if (Eng === 'Jan') return '01';
    if (Eng === 'Feb') return '02';
    if (Eng === 'Mar') return '03';
    if (Eng === 'Apr') return '04';
    if (Eng === 'May') return '05';
    if (Eng === 'Jun') return '06';
    if (Eng === 'Jul') return '07';
    if (Eng === 'Aug') return '08';
    if (Eng === 'Sep') return '09';
    if (Eng === 'Oct') return '10';
    if (Eng === 'Nov') return '11';
    if (Eng === 'Dec') return '12';
  };

  const Start = () => {
    const start = String(Date());
    const startYear = start.substring(11, 15);
    const startMonth = monthEngToNum(start.substring(4, 7));
    const startDay = start.substring(8, 10);
    const startHour = start.substring(16, 18);
    const startMinute = start.substring(19, 21);
    const startSecond = start.substring(22, 24);
    const startDate = {
      year: startYear,
      month: startMonth,
      day: startDay,
      hour: startHour,
      minute: startMinute,
      second: startSecond,
    };
    setStartTime(currentArray => [...currentArray, startDate]);
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const Pause = () => {
    clearInterval(interv);
    setStatus(2);
    console.log(time);
  };

  const Reset = () => {
    const finish = String(Date());
    const finishYear = finish.substring(11, 15);
    const finishMonth = monthEngToNum(finish.substring(4, 7));
    const finishDay = finish.substring(8, 10);
    const finishHour = finish.substring(16, 18);
    const finishMinute = finish.substring(19, 21);
    const finishSecond = finish.substring(22, 24);
    const finishDate = {
      year: finishYear,
      month: finishMonth,
      day: finishDay,
      hour: finishHour,
      minute: finishMinute,
      second: finishSecond,
    };
    setFinishTime(currentArray => [...currentArray, finishDate]);
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const Resume = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  return (
    <div>
      <DisplayComponent time={time} />
      <BtnComponent
        start={Start}
        pause={Pause}
        resume={Resume}
        reset={Reset}
        status={status}
      />
      <Styled.CusDiv>
        <ul>
          <h2>시작 시간</h2>
          {startTime.map((item, index) => (
            <div key={index}>
              <span>
                {item.year}/{item.month}/{item.day} {item.hour}:{item.minute}
              </span>
            </div>
          ))}
        </ul>
        <ul>
          <h2>종료 시간</h2>
          {finishTime.map((item, index) => (
            <div key={index}>
              <span>
                {item.year}/{item.month}/{item.day} {item.hour}:{item.minute}
              </span>
            </div>
          ))}
        </ul>
      </Styled.CusDiv>
    </div>
  );
};

export default Timer;
