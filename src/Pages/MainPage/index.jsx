import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'App';

import { TEAM, TEAM_ID } from 'Utils/constants';
import AllTableService from 'API/AllTableService';

import { format } from 'date-fns';

import ShowDate from './ShowDate';
import UserGuide from './UserGuide';
import MainPageTable from './MainPageTable';
import MainPageTableTabs from './MainPageTableTabs';

import styled from 'styled-components';

const MainPage = () => {
  const [date, setDate] = useState(new Date());

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);
  const [customData, setCustomData] = useState(null);

  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

  const updateSelectData = curTab => {
    // 마운트 되었을 때 updateSelectData 함수를 호출한 시점에서
    // useState의 비동기 호출 때문에 rowData에는 null이 들어가 있다.
    // 부득이 하게 중복된 코드를 useEffect로 호출되는 getUsers에 넣어서
    // 마운트 되는 시점에 한해서만 API로 받아온 데이터를 집어넣게 했다.
    if (curTab === TEAM_ID.ALL) setSelectRowData(rowData);
    else {
      const team = curTab === TEAM_ID.BLUE ? TEAM.BLUE : TEAM.RED;
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

  const getUsers = async () => {
    const dateFormat = format(date, 'yyyy-MM-dd');
    const result = await AllTableService.getAllTable(dateFormat, userId);

    const newArray = result.data.map(array => ({
      ...array,
      id: array.writer_id,
      name: array.userName,
      todoRate: array.dayObjectiveAchievementRate,
    }));
    setRowData(newArray);
    if (tab === TEAM_ID.ALL) setSelectRowData(newArray);
    else {
      const team = tab === TEAM_ID.BLUE ? TEAM.BLUE : TEAM.RED;
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

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('customData'));
    setCustomData(localData ? localData : new Array(9).fill(true));
    // 전체 칼럼의 true, false 만을 저장하고 필터링은 MainPageTable에서 진행한다.
  }, []);
  return (
    <MainPageContainer>
      {selectRowData && (
        <>
          <UserGuide rowData={rowData} userId={userId} />
          <ShowDate date={date} setDate={setDate} />

          <MainPageTableContainer>
            <MainPageBody>
              <MainPageTableTabs
                date={date}
                tab={tab}
                handleChangeTab={handleChangeTab}
                customData={customData}
                setCustomData={setCustomData}
              />
              <MainPageTable
                date={date}
                rowData={rowData}
                selectRowData={selectRowData}
                getUsers={getUsers}
                userId={userId}
                customData={customData}
              />
            </MainPageBody>
          </MainPageTableContainer>
        </>
      )}
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 50px;

  display: flex;
  flex-direction: column;
  margin: auto;
`;

const MainPageTableContainer = styled.div`
  border: 1px solid #c0c0c0;
  padding: 1em;
  border-radius: 1em;
  height: 550px;
  position: relative;
`;

const MainPageBody = styled.div`
  height: calc(100% - 50px);
  .MuiDataGrid-footerContainer {
    display: none;
  }
  .info {
    width: 8em;
    padding: 0.2em;
    border-radius: 10em;
    text-align: center;
  }
  .red {
    background-color: #dc143c;
  }
  .blue {
    background-color: #0079f0;
  }
  .머슴 {
    background-color: yellow;
  }
  .카뎃 {
    background-color: #cccccc;
  }
  .admin {
    background-color: yellow;
  }
  .cadet {
    background-color: #cccccc;
  }

  .type {
    color: #ffffff;
    width: 8em;
    padding: 0.2em;
    border-radius: 10em;
    text-align: center;
  }
  .check {
    background-color: #2ce054;
  }
  .late {
    background-color: #ffcb46;
  }
  .not {
    background-color: #ff4646;
  }
  .vacancy {
    background-color: #a477ee;
  }
  .illness {
    background-color: #a477ee;
  }
  .vacation {
    background-color: #2891f1;
  }
`;
