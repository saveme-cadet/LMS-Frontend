import { useState, useEffect } from 'react';
import { CusDatePicker } from 'Components';
import Check from './Check';
import WrongDay from './WrongDay';

import AllTableService from 'Network/AllTableService';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { checkCloumns, vaildDay } from 'Utils';
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
    const today = new Date();
    let result;

    console.log('focus : ', curFocus.id);
    console.log('id : ', id);

    if (value === 6 && rowData[id].vacation === 0) {
      alert('사용할 수 있는 휴가가 없습니다!');
      setAnchorEl(null);
      return;
    }
    if (
      today.getFullYear() !== date.getFullYear() ||
      today.getMonth() !== date.getMonth()
    ) {
      alert('지난 달 기록은 수정할 수 없습니다!');
      setAnchorEl(null);
      return;
    }
    if (select === 'checkIn') {
      result = await AllTableService.putAllTableCheckIn({
        userId: id,
        checkIn: value,
        tableDay: format(date, 'yyyy-MM-dd'),
      });
    } else {
      result = await AllTableService.putAllTableCheckOut({
        userId: id,
        checkOut: value,
        tableDay: format(date, 'yyyy-MM-dd'),
      });
    }
    setAnchorEl(null);
    getUsers();
  };

  const getUsers = async () => {
    if (vaildDay(date) !== 0) return;
    const dateFormat = format(date, 'yyyy-MM-dd');
    const result = await AllTableService.getAllTable(dateFormat);
    if (!result) {
      if (confirm('에러가 발생했습니다. 오늘 날짜로 돌아가시겠습니까?')) {
        const today = new Date();
        setDate(today);
      }
      return;
    }
    const arrays = result.data;
    console.log('array : ', arrays);

    const newArray = [];
    arrays.map(array => {
      const newData = {
        id: array.writer_id,
        team: array.team,
        name: array.userName,
        attendScore: array.attendScore,
        participateScore: array.participateScore,
        vacation: array.vacation,
        role: array.role,
        checkIn: array.checkIn,
        checkOut: array.checkOut,
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
          {vaildDay(date) ? (
            <WrongDay wrongType={vaildDay(date)} />
          ) : (
            <>
              <DataGrid
                rows={selectRowData}
                columns={checkCloumns}
                onCellClick={handleClickCell}
                hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
                hideFooterSelectedRowCount={true} // row count 숨기기
                getRowClassName="cell"
              />
              <Check
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                onChangeCheck={handleChangeCheck}
              />
            </>
          )}
        </Box>
      </Styled.MainTable>
    </Styled.MainBackground>
  );
};

export default Body;
