import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';

import styled from 'styled-components';

const MainPageTableTabs = ({ tab, handleChangeTab }) => {
  const columns = [
    '팀',
    '역할',
    '이름',
    '출석',
    '결석',
    '휴가',
    '체크',
    '목표',
  ];
  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
        <Divider orientation="vertical" flexItem />
        {columns.map((column, i) => {
          return (
            <CustomColumn key={i} isShow="true">
              {column}
            </CustomColumn>
          );
        })}
      </Tabs>
    </>
  );
};

export default MainPageTableTabs;

const CustomColumn = styled.span`
  background-color: ${props => (props.isShow ? 'white' : 'gray')};

  min-width: 80px;
  height: 40px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;
