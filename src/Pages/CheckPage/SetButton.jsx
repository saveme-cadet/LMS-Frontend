import { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import Fab from '@mui/material/Fab';

const SetButton = ({ time, onChangeCheck }) => {
  // 시간에 따라 체크인이냐 체크아웃이냐
  const [CheckLog, setCheckLog] = useState(0);
  const LeastCheckInTime = dayjs().set('hour', 12).set('minute', 0);
  const CheckTime = dayjs().set('hour', 15).set('minute', 0);

  const checkInTime = dayjs().set('hour', 9).set('minute', 5);
  const checkOutTime = dayjs().set('hour', 18).set('minute', 35);
  useEffect(() => {
    if (time <= CheckTime) {
      if (time <= checkInTime) setCheckLog(1);
      else if (time <= LeastCheckInTime) setCheckLog(2);
      else setCheckLog(3);
    } else {
      if (time <= checkOutTime) {
        setCheckLog(1);
      } else setCheckLog(2);
    }
    // if ()
    // else setCheckLog(2);
  }, []);
  return (
    <div className="buttons">
      <div className="major">
        <Fab
          onClick={() => {
            onChangeCheck(CheckLog);
          }}
        >
          출석
        </Fab>
      </div>
      <div className="minor">
        <Fab
          onClick={() => {
            onChangeCheck(4);
          }}
        >
          공결
        </Fab>
        <Fab
          onClick={() => {
            onChangeCheck(5);
          }}
        >
          병결
        </Fab>
        <Fab
          onClick={() => {
            onChangeCheck(6);
          }}
        >
          휴가
        </Fab>
      </div>
    </div>
  );
};

export default SetButton;
