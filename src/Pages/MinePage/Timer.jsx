import * as React from 'react';
import DisplayComponent from './DisplayComponent';
import Styled from './Timer.styled';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

const Timer = () => {
  const [startTime, setStartTime] = useState();
  const [finishTime, setFinishTime] = useState([]);
  const [status, setStatus] = useState(0);
  const [now, setNow] = useState(format(new Date(), 'HH:mm:ss'));

  const savedStatus = localStorage.getItem('savedStatus');

  const Clock = () => {
    const time = new Date();
    const timeShort = format(time, 'HH:mm:ss');
    setNow(timeShort);
  };
  setInterval(Clock, 1000);

  const Start = () => {
    const date = new Date();
    const start = format(date, 'yyyy-MM-dd HH:mm:ss');
    setStartTime(start);
    localStorage.setItem('savedStatus', 1);
    setStatus(1);
  };

  const Stop = () => {
    const date = new Date();
    const finish = {
      start: startTime,
      finish: format(date, 'yyyy-MM-dd HH:mm:ss'),
    };
    setFinishTime(currentArray => [...currentArray, finish]);
    setStatus(0);
    localStorage.setItem('savedStatus', 0);
  };

  // useEffect(() => {
  //   Resume();
  //   return () => {
  //     setDifference(0);
  //     clearInterval(interv); // cleanup function을 이용
  //   };
  // }, []);

  return (
    <div>
      <DisplayComponent
        clock={now}
        status={savedStatus}
        start={Start}
        stop={Stop}
        time={finishTime}
      />
    </div>
  );
};

export default Timer;
