import { useState } from 'react';

import { CusDatePicker } from '../../Components';
import Styled from './StatsPage.styled';
import { format } from 'date-fns';

const MonthInfo = ({ date }) => {
  return (
    <div className="month">
      <h1>{date}월의 정보</h1>
      <div>총 목표 달성률</div>
      <div>총 출석률</div>
      <div>출결 점수</div>
      <div>아오지 시간</div>
    </div>
  );
};

const DayInfo = ({ date }) => {
  return (
    <div className="day">
      <h1>{date}일의 정보</h1>
      <div>list 형태로 그날 목표 했는지 안했는지</div>
    </div>
  );
};

const StatsPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Styled.Stat>
        <h1>{format(date, 'yyyy/MM/dd')}</h1>
        <CusDatePicker date={date} setDate={setDate} />

        <div classNmae="info">
          <MonthInfo date={format(date, 'M')} />
          <DayInfo date={format(date, 'd')} />
        </div>
      </Styled.Stat>
    </>
  );
};

export default StatsPage;
