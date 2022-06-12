import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { AuthContext } from 'App';
import { CRUDUserService } from 'API';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
    const result = CRUDUserService.postLogout();
    localStorage.clear();
    auth.setStatus(null);
  };

  useEffect(() => {
    let path = loca.pathname.split('/')[1];
    if (!path) path = '';
    setCurPage(path);
  }, []);

  return (
    <>
      <div
        className="home"
        onClick={() => {
          navi('/');
          setCurPage('');
        }}
      >
        <img src="asset/saveme.png" alt="saveme" />
        <span>구해줘 카뎃</span>
      </div>
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
          <Tab
            className="button logout"
            label="로그아웃"
            onClick={handleClickLogout}
          />
        </Tabs>
      )}
    </>
  );
};

export default SideBar;
