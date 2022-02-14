import * as React from 'react';
import Styled from './Timer.styled';

const DisplayComponent = props => {
  return (
    <Styled.DigitDiv>
      <span
        style={{
          fontSize: 100,
        }}
      >
        {props.time.h >= 10 ? props.time.h : '0' + props.time.h}:
      </span>
      <span
        style={{
          fontSize: 100,
        }}
      >
        {props.time.m >= 10 ? props.time.m : '0' + props.time.m}:
      </span>
      <span
        style={{
          fontSize: 100,
        }}
      >
        {props.time.s >= 10 ? props.time.s : '0' + props.time.s}
      </span>
      &nbsp;&nbsp;
      <span
        style={{
          fontSize: 50,
        }}
      >
        {props.time.ms >= 10 ? props.time.ms : '0' + props.time.ms}
      </span>
    </Styled.DigitDiv>
  );
};

export default DisplayComponent;
