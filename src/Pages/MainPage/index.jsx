import { useState, useEffect, useContext } from 'react';

import { AuthContext } from 'App';
import { validDay, constants } from 'Utils';
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
  const TEAM = constants.TEAM;

  const updateSelectRowData = curTab => {
    // 마운트 되었을 때 updateSelectRowData 함수를 호출한 시점에서
    // useState의 비동기 호출 때문에 rowData에는 null이 들어가 있다.
    // 부득이 하게 중복된 코드를 useEffect로 호출되는 getUsers에 넣어서
    // 마운트 되는 시점에 한해서만 API로 받아온 데이터를 집어넣게 했다.
    // console.log('rowData : ', rowData);
    if (curTab === TEAM.ALL) setSelectRowData(rowData);
    else {
      const team = curTab === TEAM.BLUE ? 'blue' : 'red';
      setSelectRowData(
        rowData.filter(data => {
          return data.team === team;
        }),
      );
    }
  };

  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectRowData(dstTab);
  };

  const getUsers = async () => {
    if (validDay(date) !== 0) return;
    const dateFormat = format(date, 'yyyy-MM-dd');
    const result = await AllTableService.getAllTable(dateFormat, userId);
    if (!result) {
      if (confirm('에러가 발생했습니다. 오늘 날짜로 돌아가시겠습니까?')) {
        setDate(new Date());
      }
      return;
    }
    const newArray = result.data.map(array => ({
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
    }));
    setRowData(newArray);
    if (tab === TEAM.ALL) setSelectRowData(newArray);
    else {
      const team = tab === TEAM.BLUE ? 'blue' : 'red';
      setSelectRowData(
        rowData.filter(data => {
          return data.team === team;
        }),
      );
    }
  };

  useEffect(() => {
    getUsers();
  }, [date]);

  return (
    <Styled.MainBackground>
      {selectRowData && (
        <>
          <UserGuide rowData={rowData} userId={userId} />
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
        </>
      )}
    </Styled.MainBackground>
  );
};

export default MainPage;
