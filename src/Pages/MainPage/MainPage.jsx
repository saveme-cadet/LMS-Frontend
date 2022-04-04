import { useState, useEffect, useContext } from 'react';

import { AuthContext } from 'App';
import { checkCloumns, validDay, isValidCheck } from 'Utils';
import AllTableService from 'Network/AllTableService';
import CRUDUserService from 'Network/CRUDUserService';

import { format } from 'date-fns';

import { CusDatePicker, ShowToday } from 'Components';
import Check from './Check';
import WrongDay from './WrongDay';
import UserGuide from './UserGuide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import Styled from './MainPage.styled';

const MainPage = () => {
  const [date, setDate] = useState(new Date());

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });

  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

  // console.log('userInfo : ', userId, userName, role, team);
  // console.log('auth : ', auth.status);

  const updateSelectRowData = (curArrays, curTab) => {
    const filterArray = [];
    let filter = '';
    if (curTab === 1) filter = 'blue';
    else if (curTab === 2) filter = 'red';
    curArrays.map(array => {
      if (array.team !== filter) filterArray.push(array);
    });
    setSelectRowData(filterArray);
  };

  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectRowData(rowData, dstTab);
  };

  const handleClickCell = (params, event) => {
    const field = params.field;
    if (field !== 'checkIn' && field !== 'checkOut') return;

    const selectUserInfo = selectRowData.find(array => array.id === params.id);
    const myInfo = rowData.find(array => array.id === +userId);
    // console.log('myinfo :', myInfo);
    // console.log('selectUserInfo : ', selectUserInfo);
    if (myInfo === undefined) {
      alert('이번 달에 참가하고 있지 않습니다!');
      return;
    }

    const valid = isValidCheck(
      selectUserInfo,
      myInfo.id,
      myInfo.role,
      myInfo.team,
    );
    console.log('valud:', valid);
    if (valid) {
      valid === -1 ? alert('수정 권한이 없습니다!') : alert('다른 팀입니다!');
      return;
    }
    setAnchorEl(event.currentTarget);
    setCurFocus({ id: params.id, select: field });
  };

  const handleChangeCheck = async value => {
    const id = curFocus.id;
    const select = curFocus.select;
    const today = new Date();
    let result;
    // console.log('id : ', id, value);
    // console.log('row', selectRowData);
    const selectUserInfo = selectRowData.find(array => array.id === id);

    if (value === 6 && selectUserInfo.vacation === 0) {
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
    if (validDay(date) !== 0) return;
    const dateFormat = format(date, 'yyyy-MM-dd');
    const result = await AllTableService.getAllTable(dateFormat, userId);
    if (!result) {
      if (confirm('에러가 발생했습니다. 오늘 날짜로 돌아가시겠습니까?')) {
        const today = new Date();
        setDate(today);
      }
      return;
    }
    const arrays = result.data;
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
        todoRate: array.dayObjectiveAchievementRate,
      };
      newArray.push(newData);
    });
    setRowData(newArray);
    updateSelectRowData(newArray, tab);
  };

  useEffect(() => {
    console.log('today : ', date);
    getUsers();
    console.log('row data : ', rowData);
  }, [date]);

  return (
    <Styled.MainBackground>
      <UserGuide status={auth.status} />
      <div className="time">
        <ShowToday date={date} />
        <CusDatePicker date={date} setDate={setDate} filterWeekend={true} />
      </div>
      <Styled.MainTable>
        <Box className="table">
          <Tabs value={tab} onChange={handleChangeTab}>
            <Tab label="전체 보기" />
            <Tab label="레드 팀" />
            <Tab label="블루 팀" />
          </Tabs>
          {validDay(date) ? (
            <WrongDay wrongType={validDay(date)} />
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

export default MainPage;
