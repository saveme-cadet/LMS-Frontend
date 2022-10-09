import { useState, useEffect } from 'react';

import { TEAM_NAME, TEAM_ID, ERROR_MESSAGES } from 'Utils/constants';
import { AllTableService } from 'API';
import WrongDay from './WrongDay';

import { format } from 'date-fns';

import ShowDate from './ShowDate';
// import UserGuide from './UserGuide';
import MainPageTable from './MainPageTable';
import MainPageTableTabs from './MainPageTableTabs';
import FilterModal from './FilterModal';

import styled from 'styled-components';

const MainPage = () => {
  const [date, setDate] = useState(new Date());

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);
  const [customData, setCustomData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const updateSelectData = curTab => {
    // 마운트 되었을 때 updateSelectData 함수를 호출한 시점에서
    // useState의 비동기 호출 때문에 rowData에는 null이 들어가 있다.
    // 부득이 하게 중복된 코드를 useEffect로 호출되는 getUsers에 넣어서
    // 마운트 되는 시점에 한해서만 API로 받아온 데이터를 집어넣게 했다.
    if (curTab === TEAM_ID.ALL) setSelectRowData(rowData);
    else {
      const team = curTab === TEAM_ID.BLUE ? TEAM_NAME.BLUE : TEAM_NAME.RED;

      setSelectRowData(
        rowData.filter(data => {
          return data.team === team;
        }),
      );
    }
  };

  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectData(dstTab);
  };

  const handleClickToggleCustom = dst => {
    switch (dst) {
      case '팀':
        customData[0] = !customData[0];
        break;
      case '역할':
        customData[1] = !customData[1];
        break;
      case '출석':
        customData[3] = !customData[3];
        break;
      case '결석':
        customData[4] = !customData[4];
        break;
      case '휴가':
        customData[5] = !customData[5];
        break;
      case '목표':
        customData[8] = !customData[8];
        break;
      default:
    }
    const newArray = [...customData];
    // 분해 할당하지 않으면 얕은 복사이기에 state가 변경되지 않음
    setCustomData(newArray);
    localStorage.setItem('customData', JSON.stringify(newArray));
  };

  const getUsers = async () => {
    const dateFormat = format(date, 'yyyy-MM-dd');

    const result = await AllTableService.getTable(dateFormat, true);
    console.log(result);

    // 백엔드 장애 데이터 임시 조치
    if (!result || !result.data[0].attendanceId) {
      setRowData(null);
      setSelectRowData(null);
      return;
    }

    const newArray = result.data.map(array => ({
      id: array.attendanceId,
      userId: array.userId,
      username: array.username,
      attendStatus: array.attendStatus,
      role: array.role,
      team: array.team,
      vacation: array.vacation,
      absentScore: array.totalAbsentScore,
      attendanceScore: array.attendanceScore,
      todoSuccessRate: array.todoSuccessRate * 100,
      checkIn: array.checkIn,
      checkOut: array.checkOut,
    }));
    setRowData(newArray);
    if (tab === TEAM_ID.ALL) setSelectRowData(newArray);
    else {
      const team = tab === TEAM_ID.BLUE ? TEAM_NAME.BLUE : TEAM_NAME.RED;
      setSelectRowData(
        newArray.filter(data => {
          return data.team === team;
        }),
      );
    }
  };

  useEffect(() => {
    getUsers();
  }, [date]);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('customData'));
    setCustomData(localData ? localData : new Array(9).fill(true));
    // 전체 칼럼의 true, false 만을 저장하고 필터링은 MainPageTable에서 진행한다.
  }, []);

  return (
    <MainPageContainer>
      {selectRowData ? (
        <>
          {/* <UserGuide rowData={rowData} userId={userId} /> */}
          <ShowDate date={date} setDate={setDate} />

          <MainPageTableTabs
            date={date}
            tab={tab}
            handleChangeTab={handleChangeTab}
            setIsOpen={setIsOpen}
          />
          <MainPageTable
            date={date}
            selectRowData={selectRowData}
            getUsers={getUsers}
            customData={customData}
          />
        </>
      ) : (
        <>
          <ShowDate date={date} setDate={setDate} />
          <WrongDay wrongType={ERROR_MESSAGES.NO_DATA} />
        </>
      )}
      {isOpen && (
        <FilterModal
          customData={customData}
          onClickToggleCustom={handleClickToggleCustom}
          setIsOpen={setIsOpen}
        />
      )}
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  box-sizing: border-box;
  padding: 50px;

  display: flex;
  flex-direction: column;
  margin: auto;
`;
