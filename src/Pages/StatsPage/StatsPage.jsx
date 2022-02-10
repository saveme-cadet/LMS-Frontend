import { useState } from 'react';
import { CusDatePicker } from 'Components';

import { format } from 'date-fns';

import Styled from './StatsPage.styled';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';

const MemberList = () => {
  const [list, setList] = useState(['1', '2', '3', '4', '5']);
  return (
    <div className="list">
      {list.map((e, i) => {
        return <Avatar key={i} />;
      })}
    </div>
  );
};

const AvatarBox = () => {
  return (
    <>
      <Avatar />
      <h1>test</h1>
    </>
  );
};

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
        <div className="header">
          <Button variant="text">전체 통계</Button>
          <Button variant="text">개인 통계</Button>

          <MemberList />
        </div>
        <div className="body">
          <CusDatePicker date={date} setDate={setDate} />
          <AvatarBox />
        </div>

        <div classNmae="info">
          <MonthInfo date={format(date, 'M')} />
          <DayInfo date={format(date, 'd')} />
        </div>
      </Styled.Stat>
    </>
  );
};

export default StatsPage;
