import { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import Fab from '@mui/material/Fab';

const SetButton = ({ time, handleChangeStatus }) => {
  // 시간에 따라 체크인이냐 체크아웃이냐
  const [CheckText, setCheckText] = useState('');
  const CheckInTime = dayjs().set('hour', 9).set('minute', 0);
  const CheckOutTime = dayjs().set('hour', 18).set('minute', 30);
  useEffect(() => {
    if (time <= CheckInTime) setCheckText('체크인');
    else if (time <= CheckOutTime) setCheckText('조기퇴근');
    else setCheckText('체크아웃');
  }, []);
  return (
    <div className="buttons">
      <div className="major">
        <Fab
          onClick={() => {
            handleChangeStatus(1);
          }}
        >
          {CheckText}
        </Fab>
      </div>
      <div className="minor">
        <Fab
          onClick={() => {
            handleChangeStatus(2);
          }}
        >
          공결
        </Fab>
        <Fab
          onClick={() => {
            handleChangeStatus(3);
          }}
        >
          병결
        </Fab>
        <Fab
          onClick={() => {
            handleChangeStatus(3);
          }}
        >
          휴가
        </Fab>
      </div>
    </div>
  );
};

export default SetButton;
