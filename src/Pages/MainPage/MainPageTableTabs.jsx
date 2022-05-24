import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MainPageTableTabs = ({ tab, handleChangeTab }) => {
  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
      </Tabs>
    </>
  );
};

export default MainPageTableTabs;
