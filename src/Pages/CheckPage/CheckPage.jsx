import { useState, useEffect } from 'react';
import { Clock, Today } from 'Components';
import SetButton from './SetButton';

import dayjs from 'dayjs';

import Container from '@mui/material/Container';

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
      <Today time={time} />

      <Clock time={time} />
      <SetButton time={time} sethandleChangeStatusStatus={setStatus} />
    </Container>
  );
};

export default CheckPage;
