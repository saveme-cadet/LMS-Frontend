import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from 'App';
import { CRUDUserService } from 'API';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styled from 'styled-components';

const gatherTownLink = 'https://app.gather.town/app/Zq3peLuvz5isVQ0f/42seoul';

const SideBar = () => {
  const [curPage, setCurPage] = useState(null);
  const navi = useNavigate();
  const loca = useLocation();
  const auth = useContext(AuthContext);

  const handleChangePage = (event, value) => {
    setCurPage(value);
    navi(`/${value}`);
  };
  const handleClickLogout = async () => {
    const result = await CRUDUserService.postLogout();
    localStorage.clear();
    auth.setStatus(null);
  };

  useEffect(() => {
    let path = loca.pathname.split('/')[1];
    if (!path) path = '';
    setCurPage(path);
  }, []);

  return (
    <SideBarContainer>
      <HomeButton
        onClick={() => {
          navi('/');
          setCurPage('');
        }}
      >
        <img src="asset/saveme.png" alt="saveme" />
        <span>구해줘 카뎃</span>
      </HomeButton>
      {curPage !== null && (
        <Tabs
          orientation="vertical"
          value={curPage}
          onChange={handleChangePage}
          className="tabs"
        >
          <Tab className="button" label="출결표" value="" />
          <Tab className="button" label="오늘 할 일" value="todo" />
          <Tab className="button" label="아오지 탄광" value="mine" />
          <Tab className="button" label="머슴" value="admin" />
          <div
            className="button link"
            onClick={() => window.open(gatherTownLink, '_blank')}
          >
            게더타운 바로가기
          </div>
          <Tab
            className="button logout"
            label="로그아웃"
            onClick={handleClickLogout}
          />
        </Tabs>
      )}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #220646;
  height: 100%;
  width: 150px;

  .tabs {
    height: 100%;
  }
  .sub-tab {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
  }

  .button {
    color: #ffffff;
    max-width: 13em;
  }
  .link {
    position: absolute;
    bottom: 7rem;
    width: 100%;
    text-align: center;

    cursor: pointer;
  }
  .logout {
    text-align: center;
    border: 1px solid transparent;
    background-color: #110323;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    font-size: 20px;
    font-weight: bold;
  }
`;

const HomeButton = styled.div`
  margin: 10px 0 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
    margin: 0 5px;
  }
  span {
    white-space: nowrap;
  }
`;
