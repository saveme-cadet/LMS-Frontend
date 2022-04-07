import { useState, useEffect } from 'react';

import UserInfoService from 'Network/UserInfoService';
import { getStatusMessage } from 'Utils';
import dayjs from 'dayjs';

import { Clock, Today } from 'Components';
import CheckBox from './CheckBox';
import SetButton from './SetButton';

import Styled from './CheckPage.styled';

const curWhich = time => {
  const CheckTime = dayjs().set('hour', 15).set('minute', 0);
  // console.log('curwhich');
  if (time < CheckTime) return 0;
  else return 1;
};
const CheckPage = () => {
  const [time, setTime] = useState(dayjs());
  const [checkArray, setCheckArray] = useState([0, 0]);
  const [which, setWhich] = useState(0);
  const nowWhich = curWhich(time);
  let timer;

  const handleChangeCheck = change => {
    // console.log('checkArray:', checkArray);
    // console.log('change : ', change);
    checkArray[which] = change;
    setCheckArray(checkArray);
  };

  useEffect(async () => {
    const result = await UserInfoService.getAllUser(1);
    // console.log(result.data);
    // 맨 처음 해당 유저의 그날의 체크인, 체크아웃에 대한 값을 연동해서 받아와야 한다.
    // 해당 유저가 참가하고 있다면 해당 유저의 정보(출결 점수, 오늘의 목표, 휴가)를 받아와야 한다.
    // 해당 유저가 참가하고 있지 않다면 참가하고 있지 않다는 예외처리를 해야 한다.

    setWhich(nowWhich);
    timer = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Styled.CheckBackground type={curWhich(time)}>
      <Styled.CheckHeader day={time}>
        <Today time={time} />
      </Styled.CheckHeader>
      <Styled.CheckBody>
        <Clock time={time} />
        {getStatusMessage(curWhich(time))}
        <CheckBox checkArray={checkArray} setWhich={setWhich} />
        <SetButton time={time} onChangeCheck={handleChangeCheck} />
      </Styled.CheckBody>
    </Styled.CheckBackground>
  );
};

export default CheckPage;
