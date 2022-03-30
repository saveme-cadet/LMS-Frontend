import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SideBar = () => {
  const [curPage, setCurPage] = useState(null);
  const navi = useNavigate();
  const loca = useLocation();

  const handleChangePage = (event, value) => {
    console.log('login : ', value);
    setCurPage(value);
    navi(`/${value}`);
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
        }}
      >
        <img src="asset/saveme.png" alt="saveme" />
        구해줘 카뎃
      </div>
      {curPage !== null && (
        <Tabs
          orientation="vertical"
          value={curPage}
          onChange={handleChangePage}
        >
          <Tab label="출결표" value="" />
          <Tab label="오늘 할 일" value="todo" />
          <Tab label="아오지 탄광" value="mine" />
          <Tab label="머슴" value="admin" />
        </Tabs>
      )}
    </>
  );
};

export default SideBar;
