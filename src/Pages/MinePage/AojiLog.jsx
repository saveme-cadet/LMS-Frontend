import { format } from 'date-fns';

const fotmatDate = date => {
  if (!date) return '공부 중!';
  date = new Date(date);

  return format(date, 'HH:mm:ss');
};

const fotmatRecord = record => {
  if (record === 'doing study') return '00:00:00';
  const arr = record.split(':');
  const newRecord = arr.map(i => {
    return parseInt(i) < 10 ? '0' + i : i;
  });

  return newRecord.join(':');
};
const AojiLog = ({ data }) => {
  return (
    <h3>
      시작 시간 : {fotmatDate(data.startAt)}
      종료 시간 : {fotmatDate(data.endAt)}
      기록 시간 : {fotmatRecord(data.recodeTime)}
    </h3>
  );
};

export default AojiLog;
