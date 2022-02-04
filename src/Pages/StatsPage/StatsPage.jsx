import { useState } from 'react';

import { CusDatePicker } from '../../Components';
import { format } from 'date-fns';

const StatsPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <h1>{format(date, 'yyyy/MM/dd')}</h1>
      <CusDatePicker date={date} setDate={setDate} />
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
