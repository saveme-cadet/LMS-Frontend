import * as React from 'react';
import DisplayComponent from './DisplayComponent';
import Styled from './Timer.styled';
import { useState } from 'react';
import { format } from 'date-fns';

const Timer = () => {
  const [startFullFormat, setStartFullFormat] = useState([]);
  const [startShortFormat, setStartShortFormat] = useState([]);
  const [finishFullFormat, setFinishFullFormat] = useState([]);
  const [finishShortFormat, setFinishShortFormat] = useState([]);
  const [difference, setDifference] = useState(0);
  const [differenceTemp, setDifferenceTemp] = useState(0);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const stopRefresh = event => {
    alert('멈춤 버튼을 클릭하세요.');
    event.preventDefault();
  };

  const savedSeconds = localStorage.getItem('savedSeconds');
  const savedStatus = localStorage.getItem('savedStatus');

  if (status !== 0) localStorage.setItem('savedStatus', status);
  // if (difference === 0) localStorage.setItem('savedSeconds', difference);
  // if (status === 0) localStorage.setItem('savedStatus', status);
  // if (differenceTemp === 0)
  //   localStorage.setItem('savedDifferenceTemp', differenceTemp);

  const Start = () => {
    const start = new Date();
    const startFull = format(start, 'yyyy-MM-dd HH:mm:ss');
    const startShort = format(start, 'HH:mm:ss');
    setStartFullFormat(currentArray => [...currentArray, startFull]);
    setStartShortFormat(currentArray => [...currentArray, startShort]);
    console.log(startShortFormat);
    setInterv(
      setInterval(() => {
        const updatedStart = new Date();
        setDifference(Math.floor((updatedStart - start) / 10));
        // window.addEventListener('beforeunload', stopRefresh);
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
    setDifferenceTemp(difference);
    setStatus(2);
    localStorage.setItem('savedSeconds', difference);
  };

  const Resume = () => {
    const resume = new Date();
    const resumeFull = format(resume, 'yyyy-MM-dd HH:mm:ss');
    const resumeShort = format(resume, 'HH:mm:ss');
    setStartFullFormat(currentArray => [...currentArray, resumeFull]);
    setStartShortFormat(currentArray => [...currentArray, resumeShort]);
    console.log(startShortFormat);
    setInterv(
      setInterval(() => {
        const updatedStart = new Date();
        setDifference(
          Number(savedSeconds) + Math.floor((updatedStart - resume) / 10),
        );
        // window.addEventListener('beforeunload', stopRefresh);
      }, 10),
    );
    setStatus(1);
  };

  // window.addEventListener('beforeunload', Pause);

  return (
    <div>
      <DisplayComponent
        difference={difference}
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
