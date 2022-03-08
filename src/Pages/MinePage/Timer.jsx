import * as React from 'react';
import DisplayComponent from './DisplayComponent';
import Styled from './Timer.styled';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

const Timer = () => {
  const [startFullFormat, setStartFullFormat] = useState([]);
  const [startShortFormat, setStartShortFormat] = useState([]);
  const [finishFullFormat, setFinishFullFormat] = useState([]);
  const [finishShortFormat, setFinishShortFormat] = useState([]);
  const [difference, setDifference] = useState(0);
  const [differenceTemp, setDifferenceTemp] = useState(0);
  const [interv, setInterv] = useState(0);
  const [status, setStatus] = useState(0);
  // const [nowT, setNowT] = useState(0);
  // const [timeT, setTimeT] = useState(0);
  // const [diff, setDiff] = useState(0);

  const savedSeconds = localStorage.getItem('savedSeconds');
  const savedStatus = localStorage.getItem('savedStatus');
  const time = localStorage.getItem('time');
  const now = localStorage.getItem('now');
  const times = localStorage.getItem('times');
  const nows = localStorage.getItem('nows');
  const dif = localStorage.getItem('dif');
  const total = localStorage.getItem('total');
  const intv = localStorage.getItem('intv');

  if (status !== 0) localStorage.setItem('savedStatus', status);
  // if (difference === 0) localStorage.setItem('savedSeconds', difference);
  // if (status === 0) localStorage.setItem('savedStatus', status);
  // if (differenceTemp === 0)
  //   localStorage.setItem('savedDifferenceTemp', differenceTemp);

  const Start = () => {
    const start = new Date();
    const startFull = format(start, 'yyyy-MM-dd HH:mm:ss');
    const startShort = format(start, 'HH:mm:ss');
    const startInSecond = Math.floor(start.getTime() / 1000);
    setStartFullFormat(currentArray => [...currentArray, startFull]);
    setStartShortFormat(currentArray => [...currentArray, startShort]);
    localStorage.setItem('time', startFull);
    localStorage.setItem('times', startInSecond);
    localStorage.setItem('intv', interv);
    // setTimeT(start.getTime());
    // setDiff(nowT - timeT);
    console.log(startShortFormat);
    setInterv(
      setInterval(() => {
        const updatedStart = new Date();
        //   const updatedStart = new Date();
        const updatedStartFull = format(updatedStart, 'yyyy-MM-dd HH:mm:ss');
        const updatedStartShort = format(updatedStart, 'HH:mm:ss');
        const updatedInSecond = Math.floor(updatedStart.getTime() / 1000);
        // setNowT(updatedStart.getTime());
        localStorage.setItem('now', updatedStartFull);
        localStorage.setItem('nows', updatedInSecond);
        localStorage.setItem('dif', Number(nows) - Number(times));
        setDifference(Math.floor((updatedStart - start) / 1000));
        localStorage.setItem(
          'total',
          Number(savedSeconds) + Math.floor((updatedStart - start) / 1000),
        );
      }, 10),
    );
    setStatus(1);
  };

  const Pause = () => {
    const finish = new Date();
    const finishFull = format(finish, 'yyyy-MM-dd HH:mm:ss');
    const finishShort = format(finish, 'HH:mm:ss');
    setFinishFullFormat(currentArray => [...currentArray, finishFull]);
    setFinishShortFormat(currentArray => [...currentArray, finishShort]);
    console.log(finishShortFormat);
    clearInterval(interv);
    // setDifferenceTemp(difference);
    setStatus(2);
    localStorage.setItem('intv', interv);
    localStorage.setItem('savedSeconds', difference);
  };

  const Resume = () => {
    const resume = new Date();
    const resumeFull = format(resume, 'yyyy-MM-dd HH:mm:ss');
    const resumeShort = format(resume, 'HH:mm:ss');
    const resumeInSecond = Math.round(resume.getTime() / 1000);
    setStartFullFormat(currentArray => [...currentArray, resumeFull]);
    setStartShortFormat(currentArray => [...currentArray, resumeShort]);
    localStorage.setItem('time', resumeFull);
    localStorage.setItem('times', resumeInSecond);
    localStorage.setItem('dif', 0);
    localStorage.setItem('intv', interv);
    // setTimeT(resume.getTime());
    // setDiff(nowT - timeT);
    setInterv(
      setInterval(() => {
        const updatedStart = new Date();
        const updatedStartFull = format(updatedStart, 'yyyy-MM-dd HH:mm:ss');
        const updatedStartShort = format(updatedStart, 'HH:mm:ss');
        const updatedInSecond = Math.floor(updatedStart.getTime() / 1000);
        // setNowT(updatedStart.getTime());
        localStorage.setItem('now', updatedStartFull);
        localStorage.setItem('nows', updatedInSecond);
        localStorage.setItem('dif', Math.floor((updatedStart - resume) / 1000));
        setDifference(
          Number(savedSeconds) + Math.floor((updatedStart - resume) / 1000),
        );
        localStorage.setItem(
          'total',
          Number(savedSeconds) + Math.floor((updatedStart - resume) / 1000),
        );
      }, 1000),
    );
    setStatus(1);
  };

  // console.log(difference);
  console.log(interv);

  useEffect(() => {
    Resume();
    return () => {
      setDifference(0);
      clearInterval(interv); // cleanup function을 이용
    };
  }, []);

  return (
    <div>
      <DisplayComponent
        difference={difference}
        dif={dif}
        savedSeconds={savedSeconds}
        status={savedStatus}
        start={Start}
        pause={Pause}
        resume={Resume}
      />
      {/* <Styled.CusDiv>
        <ul>
          <h2>시작 시간</h2>
          {startTime.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))}
        </ul>
        <ul>
          <h2>종료 시간</h2>
          {finishTime.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))}
        </ul>
        <ul>
          <h2>시간 차</h2>
          {/* {difference.map((item, index) => (
            <div key={index}>
              <span>{item}</span>
            </div>
          ))} */}
      {/* </ul> */}
      {/* // </Styled.CusDiv> */}
    </div>
  );
};

export default Timer;
