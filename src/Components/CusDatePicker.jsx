import { useState } from 'react';

import { getDayName } from 'Utils';
import DatePicker from 'react-datepicker';
import { add, format } from 'date-fns';

import Popover from '@mui/material/Popover';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import 'react-datepicker/dist/react-datepicker.css';
// import { getDay } from 'date-fns/esm';

const CusDatePicker = ({ date, setDate }) => {
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleChangeDate = type => {
    let newDate = add(date, type);
    let dayOf = newDate.getDay();
    if (dayOf === 0 || dayOf === 6) {
      const abs = Object.values(type)[0];
      while (dayOf === 0 || dayOf === 6) {
        newDate = add(newDate, { days: abs });
        dayOf = newDate.getDay();
      }
    }
    setDate(newDate);
  };

  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div>
      <h1>
        {format(date, 'yyyy/MM/dd')} {getDayName(date.getDay())}
      </h1>

      <KeyboardDoubleArrowLeftIcon
        onClick={() => {
          handleChangeDate({ months: -1 });
        }}
      />
      <KeyboardArrowLeftIcon
        onClick={() => {
          handleChangeDate({ days: -1 });
        }}
      />
      <CalendarTodayIcon onClick={handleClick} />

      <KeyboardArrowRightIcon
        onClick={() => {
          handleChangeDate({ days: 1 });
        }}
      />
      <KeyboardDoubleArrowRightIcon
        onClick={() => {
          handleChangeDate({ months: 1 });
        }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DatePicker
          selected={date}
          onChange={handleChooseDate}
          inline
          todayButton="오늘"
          filterDate={isWeekday}
          maxDate={new Date()}
        />
      </Popover>
    </div>
  );
};

export default CusDatePicker;
