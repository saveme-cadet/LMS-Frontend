import { mainTableColumns } from 'Utils';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';

import styled from 'styled-components';

const MainPageTableTabs = ({
  tab,
  handleChangeTab,
  customData,
  setCustomData,
}) => {
  const columns = ['팀', '역할', '출석', '결석', '휴가', '목표'];
  const columnsCode = [0, 1, 3, 4, 5, 8];

  const onClickToggleCustom = dst => {
    switch (dst) {
      case '팀':
        customData[0] = !customData[0];
        break;
      case '역할':
        customData[1] = !customData[1];
        break;
      case '출석':
        customData[3] = !customData[3];
        break;
      case '결석':
        customData[4] = !customData[4];
        break;
      case '휴가':
        customData[5] = !customData[5];
        break;
      case '목표':
        customData[8] = !customData[8];
        break;
      default:
    }
    const newArray = [...customData];
    // 분해 할당하지 않으면 얕은 복사이기에 state가 변경되지 않음
    setCustomData(newArray);
    localStorage.setItem('customData', JSON.stringify(newArray));
  };
  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
        <Divider orientation="vertical" flexItem />
        {columns.map((column, i) => {
          return (
            <CustomColumn
              key={i}
              isShow={customData[columnsCode[i]]}
              onClick={() => onClickToggleCustom(column)}
            >
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
