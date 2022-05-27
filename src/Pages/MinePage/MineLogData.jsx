import { differenceInSeconds, parseISO } from 'date-fns';

import { format } from 'date-fns';

const formatDate = date => {
  if (!date) return '공부 중!';
  date = new Date(date);

  return format(date, 'HH:mm:ss');
};

const formatRecord = record => {
  if (record === 'doing study') return '00:00:00';
  const arr = record.split(':');
  const newRecord = arr.map(i => {
    return parseInt(i) < 10 ? '0' + i : i;
  });

  return newRecord.join(':');
};
const MineLogData = ({ data }) => {
  const earnedPoint = (
    differenceInSeconds(parseISO(data.endAt), parseISO(data.startAt)) /
    60 /
    60 /
    8.0
  ).toFixed(2);

  const validClick = isEnd => {
    if (isEnd)
      return (
        <div className="button valid" onClick={handleEditLog}>
          수정
        </div>
      );
    else return <div className="button not-valid">수정</div>;
  };

  const handleEditLog = () => {
    alert('준비중입니다!');
  };
  console.log(data);
  return (
    <div className="row">
      <div>{formatDate(data.startAt)}</div>
      <div>{formatDate(data.endAt)}</div>
      <div>{formatRecord(data.recodeTime)}</div>
      <div>{!isNaN(earnedPoint) ? <>{earnedPoint}점</> : <>공부 중!</>}</div>

      <div> {validClick(data.endAt)}</div>
    </div>
  );
};

export default MineLogData;
