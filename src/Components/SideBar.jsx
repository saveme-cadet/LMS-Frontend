import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const SideBar = () => {
  const [curPage, setCurPage] = useState('');
  const navi = useNavigate();

  const handleChangePage = (event, value) => {
    setCurPage(value);
    navi(`/${value}`);
  };
  return (
    <>
      <Tabs orientation="vertical" value={curPage} onChange={handleChangePage}>
        <Tab label="출결표" value="" />
        <Tab label="마이 페이지" value="my" />

        <Tab label="오늘 할 일" value="todo" />
        <Tab label="아오지 탄광" value="mine" />
        <Tab label="머슴" value="admin" />

        {/* <Tab label="통계" value="stats" />
        <Tab label="프로필" value="profile" /> */}
      </Tabs>
    </>
  );
};

export default SideBar;
