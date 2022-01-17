import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Header = () => {
  const [curPage, setCurPage] = useState('check');
  const navi = useNavigate();

  const handleChangePage = (event, value) => {
    setCurPage(value);
    navi(`/${value}`);
  };
  return (
    <>
      <Tabs
        value={curPage}
        onChange={handleChangePage}
        aria-label="basic tabs example"
      >
        <Tab label="출석 체크" value="check" />
        <Tab label="목표 작성" value="misson" />
        <Tab label="아오지 탄광" value="mine" />
      </Tabs>
    </>
  );
};

export default Header;
