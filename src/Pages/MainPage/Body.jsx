import { useState, useEffect } from 'react';
import { CusDatePicker } from 'Components';
import Check from './Check';

import AllTableService from 'Network/AllTableService';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { format } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: '#',
    type: 'number',
    width: 120,
  },
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
  },
  {
    field: 'name',
    headerName: '이름',
    type: 'string',
    width: 120,
  },
  {
    field: 'score',
    headerName: '출결 상태',
    type: 'number',
    width: 120,
  },
  {
    field: 'since',
    headerName: '고인 정도',
    type: 'number',
    width: 120,
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
  },
  {
    field: 'status',
    headerName: '진척도',
    type: 'number',
    width: 120,
  },
  {
    field: 'checkIn',
    headerName: '체크인',
    type: 'string',
    width: 120,
  },
  {
    field: 'checkOut',
    headerName: '체크아웃',
    type: 'string',
    width: 120,
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
    team: 'red',
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
    team: 'blue',
  },
];

const Body = () => {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });
  const [date, setDate] = useState(new Date());
  const [rowData, setRowData] = useState(null);
  const today = new Date();

  const handleClickCell = (params, event) => {
    const field = params.field;
    if (field !== 'checkin' && field !== 'checkout') return;
    setAnchorEl(event.currentTarget);
    setCurFocus({ id: params.id - 1, select: field });
  };

  const handleChangeCheck = result => {
    const id = curFocus.id;
    const select = curFocus.select;
    if (select === 'checkin') rowData[id].checkin = result;
    else rowData[id].checkout = result;
    setAnchorEl(null);
  };

  useEffect(async () => {
    const dateFormat = format(date, 'yyyy-MM-dd');
    console.log(dateFormat);
    const result = await AllTableService.getAllTable('1', dateFormat);
    const arrays = result.data;
    const newArray = [];
    arrays.map((array, i) => {
      const newData = {
        id: i,
        name: array.name,
        score: array.attendScore,
        since: i,

        role: array.role,
        status: '100%',
        checkIn: array.checkIn,
        checkOut: array.checkOut,
        team: array.team,
      };
      newArray.push(newData);

      console.log(newArray);
    });

    setRowData(newArray);
    // const another = await AllTableService.postAllTable('1', {
    //   userId: 2,
    //   userName: 'sham',
    //   role: '머슴',
    //   attendScore: 5.0,
    //   team: 'red',
    //   checkIn: 0,
    //   checkOut: 0,
    //   attendStatus: 1,
    //   tableDay: '2022-02-15',
    // });
    // console.log(result.data);
    // console.log(another.data);
  }, [date]);

  const handleChangeTab = (event, dstTab) => {
    console.log(dstTab);
    setTab(dstTab);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#fff' }}>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
      </Tabs>
      {date.getTime() <= today.getTime() ? (
        <>
          <DataGrid
            rows={rowData}
            columns={columns}
            onCellClick={handleClickCell}
            hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
            hideFooterSelectedRowCount={true} // row count 숨기기
          />
          <Check
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onChangeCheck={handleChangeCheck}
          />
        </>
      ) : (
        <>아직 진행하지 않은 날짜입니다!</>
      )}
      <CusDatePicker date={date} setDate={setDate} />
    </Box>
  );
};

export default Body;
