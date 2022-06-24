import { ShowMonth } from 'Components';
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '@mui/icons-material/KeyboardArrowLeft';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';

function MonthlyDate() {
  const [date, setDate] = useState(new Date());

  const handleMonth = n => {
    setDate(new Date(date.getFullYear(), date.getMonth() + n));
  };

  return (
    <MonthlyDateContainer>
      <LeftArrow type="button" onClick={() => handleMonth(-1)} />
      <ShowMonth date={date} />
      <RightArrow type="button" onClick={() => handleMonth(1)} />
    </MonthlyDateContainer>
  );
}

const MonthlyDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;

  & svg {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export default MonthlyDate;
