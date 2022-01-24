import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SideBar = () => {
  const [curPage, setCurPage] = useState('check');
  const navi = useNavigate();

  const handleChangePage = (event, value) => {
    setCurPage(value);
    navi(`/${value}`);
  };
  return (
    <>
      <Tabs orientation="vertical" value={curPage} onChange={handleChangePage}>
        <Tab label="출석 체크" value="check" />
        <Tab label="프로필" value="profile" />
        <Tab label="아오지 탄광" value="mine" />
        <Tab label="오늘 할 일" value="todo" />

      </Tabs>
    </>
  );
};

export default SideBar;
