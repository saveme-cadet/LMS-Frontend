import { useState, useEffect } from 'react';
import { Clock, Today } from 'Components';
import SetButton from './SetButton';

import dayjs from 'dayjs';

import Container from '@mui/material/Container';

import Styled from './CheckPage.styled';

const getStatusMessage = code => {
  switch (code) {
    case 0:
      return `체크인 기다리는 중! 오늘도 힘내세요!`;
    case 1:
      return `열심히 공부 중! 파이팅하세요!`;
    case 2:
      return '오늘 공부 끝! 푹 쉬세요!';
    case 3:
      return '공결처리! 잘 다녀오세요!';
    case 4:
      return '병가 처리... 빨리 나으세요ㅠㅠ';
    case 5:
      return '휴가 처리! 열심히 일한 당신, 떠나라!';
    default:
      return 'null 처리. 이걸 보셨다면 제보해주세요...ㅠ';
  }
};

const CheckPage = () => {
  const [time, setTime] = useState(dayjs());
  const [status, setStatus] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container maxWidth="90%">
      <Styled.CheckHeader day={time}>
        <Today time={time} />
      </Styled.CheckHeader>
      <Styled.CheckBody>
        <Clock time={time} />
        {getStatusMessage(status)}
        <SetButton time={time} sethandleChangeStatusStatus={setStatus} />
      </Styled.CheckBody>
    </Container>
  );
};

export default CheckPage;
