import { useState, useEffect } from 'react';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

const getPastedTime = (beginTime, now) => {
  const convertBegin = beginTime ? new Date(beginTime) : null;
  if (!convertBegin || convertBegin >= now) return '00 : 00 : 00';
  let hour = differenceInHours(now, convertBegin) % 24;
  let minute = differenceInMinutes(now, convertBegin) % 60;
  let second = differenceInSeconds(now, convertBegin) % 60;
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;
  return `${hour} : ${minute} : ${second}`;
};

const Timer = ({ beginTime }) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    let timer;
    if (beginTime) {
      timer = setInterval(() => {
        setNow(new Date());
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [beginTime]);

  return <div>{getPastedTime(beginTime, now)}</div>;
};

export default Timer;
