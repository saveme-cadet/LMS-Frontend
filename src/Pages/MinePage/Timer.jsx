import * as React from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState(0);
  const [status, setStatus] = useState(0);

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const Start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const Pause = () => {
    clearInterval(interv);
    setStatus(2);
    console.log(time);
  };

  const Reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <div>
      <DisplayComponent time={time} />
      <BtnComponent start={Start} pause={Pause} reset={Reset} status={status} />
    </div>
  );
};

export default Timer;
