import { useState } from 'react';

import Check from './Check';
import { DataGrid } from '@mui/x-data-grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';

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
    date: '2020.2.1',
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
  {
    id: 2,
    date: '2020.2.1',
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
  {
    id: 3,
    date: '2020.2.1',
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
  {
    id: 4,
    date: '2020.2.1',
    name1: 'asd',
    name2: 'asfd',
    name3: 'asd',
  },
];

const Body = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [curFocus, setCurFocus] = useState({ name: '', select: '' });

  const handleClickCell = (params, event) => {
    event.defaultMuiPrevented = true;
    console.log(params);
    params.value = '';
    // console.log(event);
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
    setIsOpen(true);
  };
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} onCellClick={handleClickCell} />

      <Check
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </div>
  );
};

export default Body;
