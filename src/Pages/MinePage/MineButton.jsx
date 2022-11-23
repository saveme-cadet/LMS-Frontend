import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

const MineButton = ({ onClickMine, date, state }) => {
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <>
      {!state ? (
        today === format(date, 'yyyy-MM-dd') ? (
          <MineBtn onClick={onClickMine} className="start">
            시작!
          </MineBtn>
        ) : (
          <MineBtn
            onClick={onClickMine}
            className="start disabled"
            disabled={true}
          >
            시작!
          </MineBtn>
        )
      ) : today === format(date, 'yyyy-MM-dd') ? (
        <MineBtn onClick={onClickMine} className="end">
          종료!
        </MineBtn>
      ) : (
        <MineBtn onClick={onClickMine} className="end disabled" disabled={true}>
          종료!
        </MineBtn>
      )}
    </>
  );
};

const MineBtn = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  color: white;
  font-size: 20px;
  font-weight: bold;

  &.start {
    background-color: #4870fd;
    &.disabled {
      opacity: 0.5;
    }
  }
  &.end {
    background-color: #ff4646;
    &.disabled {
      opacity: 0.5;
    }
  }
`;

export default MineButton;
