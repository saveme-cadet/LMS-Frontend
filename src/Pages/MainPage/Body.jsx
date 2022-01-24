import { useState, useEffect } from 'react';

import Check from './Check';
import { DataGrid } from '@mui/x-data-grid';

import {testAPI, testAttendence} from '../../api/api'
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
    console.log(params.field);
    const field = params.field;
    if (field !== 'checkin' && field !== 'checkout') return;
    setAnchorEl(event.currentTarget);
    setCurFocus({id : params.id - 1, select : field})
    setIsOpen(true);
  };

  const handleChangeCheck = (result) => {
    const id = curFocus.id;
    const select = curFocus.select;
    console.log(rows[id]);
    if (select === "checkin")
      rows[id].checkin = result;
    else
      rows[id].checkout = result;
  }

  useEffect(async() => {

    let result1 = await testAPI();
    console.log(result1);
  }, [])

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} onCellClick={handleClickCell} />

      <Check
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onChangeCheck={handleChangeCheck}
      />
    </div>
  );
};

export default Body;
