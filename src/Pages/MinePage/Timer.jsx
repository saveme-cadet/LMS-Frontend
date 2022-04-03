import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns';

const getPastedTime = (startTime, now) => {
  if (!startTime) return '00 : 00 : 00';
  let hour = differenceInHours(now, startTime) % 24;
  let minute = differenceInMinutes(now, startTime) % 60;
  let second = differenceInSeconds(now, startTime) % 60;
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (second < 10) second = '0' + second;
  return `${hour} : ${minute} : ${second}`;
};

const Timer = ({ startTime, now }) => {
  return <div>{getPastedTime(startTime, now)}</div>;
};

export default Timer;
