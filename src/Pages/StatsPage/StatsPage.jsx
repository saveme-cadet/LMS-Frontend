import { useState } from 'react';

import DatePicker from 'react-datepicker';
import { add, format } from 'date-fns';
import Popover from '@mui/material/Popover';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import 'react-datepicker/dist/react-datepicker.css';
const StatsPage = () => {
  const [date, setDate] = useState(new Date());
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
    console.log(type);
    setDate(add(date, type));
  };

  return (
    <>
      <h1>{format(date, 'yyyy/MM/dd')}</h1>
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
      <button onClick={handleClick}>달력 열기</button>

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
        />
      </Popover>
    </>
  );
};

export default StatsPage;

// import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import PickersModalDialog from '@mui/lab/internal/pickers/PickersModalDialog';

// const StatsPage = () => {
//   const [value, setValue] = useState(new Date());
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <button onClick={() => setIsOpen(true)}>asfasf</button>
//       <DatePicker
//         open={isOpen}
//         label="Basic example"
//         value={value}
//         onChange={newValue => {
//           setValue(newValue);
//         }}
//         renderInput={params => <TextField {...params} />}
//         disableMaskedInput="true"
//       />
//     </LocalizationProvider>
//   );
// };

// export default StatsPage;
