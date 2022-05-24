import { useState, useEffect, useContext } from 'react';

import { AuthContext } from 'App';
import { validDay } from 'Utils';
import AllTableService from 'Network/AllTableService';

import { format } from 'date-fns';

import { CusDatePicker, ShowToday } from 'Components';
import UserGuide from './UserGuide';
import MainPageTable from './MainPageTable';
import Box from '@mui/material/Box';

import Styled from './MainPage.styled';
import MainPageTableTabs from './MainPageTableTabs';

const MainPage = () => {
  const [date, setDate] = useState(new Date());

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);

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
    // console.log('today : ', date);
    getUsers();
    // console.log('row data : ', rowData);
  }, [date]);

  return (
    <Styled.MainBackground>
      {rowData && <UserGuide rowData={rowData} userId={userId} />}
      <div className="time">
        <ShowToday date={date} />
        <CusDatePicker date={date} setDate={setDate} filterWeekend={true} />
      </div>
      <Styled.MainTable>
        <Box className="table">
          <MainPageTableTabs tab={tab} handleChangeTab={handleChangeTab} />
          <MainPageTable
            date={date}
            rowData={rowData}
            selectRowData={selectRowData}
            getUsers={getUsers}
            userId={userId}
          />
        </Box>
      </Styled.MainTable>
    </Styled.MainBackground>
  );
};

export default MainPage;
