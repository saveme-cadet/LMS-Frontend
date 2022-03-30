import * as React from 'react';
import DisplayComponent from './DisplayComponent';
import Styled from './Timer.styled';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { AojiService } from 'Network';

const Timer = () => {
  const [startTime, setStartTime] = useState();
  const [finishTime, setFinishTime] = useState([]);
  const [status, setStatus] = useState(0);
  const [now, setNow] = useState(format(new Date(), 'HH:mm:ss'));

  const savedStatus = localStorage.getItem('savedStatus');

  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  // const Clock = () => {
  //   const time = new Date();
  //   const timeShort = format(time, 'HH:mm:ss');
  //   setNow(timeShort);
  // };
  // setInterval(Clock, 1000);

  const Start = async event => {
    const date = new Date();
    const start = format(date, 'yyyy-MM-dd HH:mm:ss');
    setStartTime(start);
    const result = await AojiService.postAoji(1); // 시작 시간 추가
    localStorage.setItem('savedStatus', 1);
    setStatus(1);
  };

  const Stop = async event => {
    const date = new Date();
    const finish = {
      start: startTime,
      finish: format(date, 'yyyy-MM-dd HH:mm:ss'),
    };
    const result = await AojiService.endAoji(1); // Error: Request failed with status code 500
    setFinishTime(currentArray => [...currentArray, finish]);
    setStatus(0);
    localStorage.setItem('savedStatus', 0);
  };

  const getMyAoji = async () => {
    const result = await AojiService.getMyAoji();
    console.log(result);
  };

  useEffect(() => {
    getMyAoji();
  }, []);

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
