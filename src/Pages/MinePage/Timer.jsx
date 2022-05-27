import { useState, useEffect } from 'react';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

const getPastedTime = (startTime, now) => {
  if (!startTime || startTime >= now) return '00 : 00 : 00';
  let hour = differenceInHours(now, startTime) % 24;
  let minute = differenceInMinutes(now, startTime) % 60;
  let second = differenceInSeconds(now, startTime) % 60;
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;
  return `${hour} : ${minute} : ${second}`;
};

const Timer = ({ startTime }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log(startTime);
    let timer;
    if (startTime) {
      timer = setInterval(() => {
        setNow(new Date());
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [startTime]);

  return <div>{getPastedTime(startTime, now)}</div>;
};

export default Timer;
