import { ShowToday } from 'Components';
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftArrow from '@mui/icons-material/KeyboardArrowLeft';
import RightArrow from '@mui/icons-material/KeyboardArrowRight';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Popover } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

function DailyDate({ date, setDate }) {
  const [today, setToday] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDay = n => {
    const nextDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + n,
    );
    // TODO: LMS 시작일 이전으로 이동 못하게 막아야하나
    if (nextDate <= today) setDate(nextDate);
  };
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChooseDate = select => {
    setDate(select);
    setAnchorEl(null);
  };
  const isWeekday = date => {
    return true;
  };

  return (
    <DailyDateContainer>
      <LeftArrow type="button" onClick={() => handleDay(-1)} />
      <ShowToday date={date} />
      <CalendarTodayIcon onClick={handleClick} />
      <RightArrow type="button" onClick={() => handleDay(1)} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ReactDatePicker
          selected={date}
          onChange={handleChooseDate}
          inline
          todayButton="오늘"
          filterDate={isWeekday}
          maxDate={new Date()}
        />
      </Popover>
    </DailyDateContainer>
  );
}

const DailyDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;

  & svg {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    cursor: pointer;
  }
`;

export default DailyDate;
