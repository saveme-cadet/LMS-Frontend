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
    field: 'id',
    headerName: '#',
    type: 'number',
    width: 120,
    // editable: true,
  },
  {
    field: 'name',
    headerName: '이름',
    type: 'string',
    width: 120,
    // editable: true,
  },
  {
    field: 'score',
    headerName: '출결 상태',
    type: 'number',
    width: 120,
    // editable: true,
  },
  {
    field: 'since',
    headerName: '고인 정도',
    type: 'number',
    width: 120,
    // editable: true,
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
    // editable: true,
  },
  {
    field: 'status',
    headerName: '진척도',
    type: 'number',
    width: 120,
    // editable: true,
  },
  {
    field: 'checkin',
    headerName: '체크인',
    type: 'string',
    width: 120,
    // editable: true,
  },
  {
    field: 'checkout',
    headerName: '체크아웃',
    type: 'string',
    width: 120,
    // editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: 'sham',
    score: '1.0',
    since: '5',
    role: '평민',
    status: '60%',
    checkin: '지각',
    checkout: '출석',
  },
  {
    id: 2,
    name: 'taeskim',
    score: '0.0',
    since: '17',
    role: '머슴',
    status: '120%',
    checkin: '출석',
    checkout: '출석',
  },
];

const Body = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });

  const handleClickCell = (params, event) => {
    // event.defaultMuiPrevented = true;
    // params.value = '';
    console.log(params.field);
    if (params.field !== 'checkin' && params.field !== 'checkout') return;
    setAnchorEl(event.currentTarget);
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
