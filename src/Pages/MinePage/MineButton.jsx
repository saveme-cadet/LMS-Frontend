import React from 'react';
import styled from 'styled-components';

const MineButton = ({ onClickMine, state }) => {
  return (
    <>
      {!state ? (
        <MineBtn onClick={onClickMine} className="start">
          시작!
        </MineBtn>
      ) : (
        <MineBtn onClick={onClickMine} className="end">
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
  }
  &.end {
    background-color: #ff4646;
  }
`;

export default MineButton;
