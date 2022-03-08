import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SideBar = () => {
  const [curPage, setCurPage] = useState('');
  const navi = useNavigate();
  const loca = useLocation();

  const handleChangePage = (event, value) => {
    setCurPage(value);
    navi(`/${value}`);
  };

  useEffect(() => {
    setCurPage(loca.pathname.split('/')[1]);
  }, []);

  return (
    <>
      <Tabs orientation="vertical" value={curPage} onChange={handleChangePage}>
        <Tab label="출결표" value="" />
        <Tab label="오늘 할 일" value="todo" />
        <Tab label="아오지 탄광" value="mine" />
        <Tab label="머슴" value="admin" />
      </Tabs>
    </>
  );
};

export default SideBar;
