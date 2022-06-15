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
  // return mainTableColumns[i].headerName.includes(dst) ? !data : data;

  const onClickToggleCustom = dst => {
    console.log(customData);
    const newArray = customData.map((data, i) => {
      return columns[i].includes(dst) ? !data : data;
    });
    setCustomData(newArray);
    localStorage.setItem('customData', JSON.stringify(newArray));
    console.log('배열 : ', newArray);
    // setCustomData(newColumn);
    // localStorage.setItem('customData', JSON.stringify(newColumn));
    // localStorage에 mainTableColumns이 저장될 때 renderCell 부분은 json으로 변환되지 않는다. 함수이기 때문?
    // 배열을 그대로 저장하는 게 아닌 무엇을 껐고 무엇을 켰는지를 확인해야 한다.
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
              isShow={customData[i]}
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
