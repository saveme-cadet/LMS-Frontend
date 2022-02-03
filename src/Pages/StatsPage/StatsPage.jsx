import { useState } from 'react';

import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
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
  const handleChangeDate = select => {
    setDate(select);
    setAnchorEl(null);
  };
  console.log(date);
  return (
    <>
      <div>{format(date, 'yyyy/MM/dd')}</div>
      <KeyboardDoubleArrowLeftIcon />
      <KeyboardArrowLeftIcon />
      <KeyboardArrowRightIcon />
      <KeyboardDoubleArrowRightIcon />
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
          onChange={handleChangeDate}
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
