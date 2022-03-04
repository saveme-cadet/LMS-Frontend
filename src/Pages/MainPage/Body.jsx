import { useState, useEffect } from 'react';
import { CusDatePicker } from 'Components';
import Check from './Check';

import AllTableService from 'Network/AllTableService';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { checkCloumns, getCheckMessage } from 'Utils';
import { format } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';

import Styled from './MainPage.styled';

const Body = () => {
  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });

  const [date, setDate] = useState(new Date());
  const today = new Date();

  const updateSelectRowData = (curArrays, curTab) => {
    const filterArray = [];
    let filter = '';
    if (curTab === 1) filter = 'blue';
    else if (curTab === 2) filter = 'red';
    curArrays.map(array => {
      if (array.team !== filter) filterArray.push(array);
    });
    setSelectRowData(filterArray);
    console.log('filter : ', filterArray);
  };

  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectRowData(rowData, dstTab);
  };

  const handleClickCell = (params, event) => {
    const field = params.field;
    if (field !== 'checkIn' && field !== 'checkOut') return;
    setAnchorEl(event.currentTarget);
    setCurFocus({ id: params.id, select: field });
  };

  const handleChangeCheck = async value => {
    const id = curFocus.id;
    const select = curFocus.select;
    console.log('value : ', value);
    console.log('select : ', select);
    if (select === 'checkIn') {
      rowData[id].checkIn = getCheckMessage(value);
      const result = await AllTableService.putAllTableCheckIn({
        userid: id + 1,
        checkIn: value,
        tableDay: format(date, 'yyyy-MM-dd'),
      });
      console.log(result);
    } else {
      rowData[id].checkOut = getCheckMessage(value);
      const result = await AllTableService.putAllTableCheckOut({
        userid: id + 1,
        checkOut: value,
        tableDay: format(date, 'yyyy-MM-dd'),
      });
      console.log(result);
    }
    setAnchorEl(null);
    // 굳이 rowData를 수정하지 않고 API get 시켜도 가능.
  };

  const getUsers = async () => {
    const dateFormat = format(date, 'yyyy-MM-dd');
    const result = await AllTableService.getAllTable(dateFormat);
    const arrays = result.data;
    console.log('array : ', arrays);
    const newArray = [];
    arrays.map((array, i) => {
      const newData = {
        id: i,
        team: array.team,
        name: array.userName,
        attendScore: array.attendScore,
        // since: i,
        role: array.role,
        checkIn: getCheckMessage(array.checkIn),
        checkOut: getCheckMessage(array.checkOut),
      };
      newArray.push(newData);
    });
    setRowData(newArray);
    updateSelectRowData(newArray, tab);
  };

  useEffect(() => {
    getUsers();
  }, [date]);

  return (
    <Styled.MainBackground>
      <Styled.MainTable>
        <CusDatePicker date={date} setDate={setDate} />

        <Box className="table" sx={{ width: '100%', bgcolor: '#fff' }}>
          <Tabs value={tab} onChange={handleChangeTab}>
            <Tab label="전체 보기" />
            <Tab label="레드 팀" />
            <Tab label="블루 팀" />
          </Tabs>
          {date.getTime() <= today.getTime() ? (
            <>
              <DataGrid
                rows={selectRowData}
                columns={checkCloumns}
                onCellClick={handleClickCell}
                hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
                hideFooterSelectedRowCount={true} // row count 숨기기
                // getRowClassName={params => {
                //   if (params.row.team === 'red') return 'red';
                //   else if (params.row.team === 'blue') return 'blue';
                // }}
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
        </Box>
      </Styled.MainTable>
    </Styled.MainBackground>
  );
};

export default Body;
