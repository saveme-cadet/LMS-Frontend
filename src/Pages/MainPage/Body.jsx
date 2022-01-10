import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Set = () => {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        label="Age"
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
const Body = () => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onCellClick={(params, event) => {
          event.defaultMuiPrevented = true;
          console.log(params);
          params.value = '';
          console.log(event);
        }}
      />
    </div>
  );
};

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'name1',
    headerName: '홍길동',
    type: 'select',
    width: 180,
    editable: true,
  },
  { field: 'name2', headerName: '홍길동', width: 180, editable: true },

  { field: 'name3', headerName: '홍길동', width: 180, editable: true },
];

const rows = [
  {
    id: 1,
    date: Set(),
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
  {
    id: 2,
    date: randomCreatedDate(),
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
  {
    id: 3,
    date: randomCreatedDate(),
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
  {
    id: 4,
    date: randomCreatedDate(),
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
];

export default Body;
