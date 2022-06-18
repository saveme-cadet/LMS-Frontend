import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { validDay } from 'Utils';

import styled from 'styled-components';

const filterArrays = [
  { label: '팀', index: 0 },
  { label: '역할', index: 1 },
  { label: '출석', index: 3 },
  { label: '결석', index: 4 },
  { label: '휴가', index: 5 },
  { label: '목표', index: 8 },
];

const FilterModal = ({ customData, onClickToggleCustom }) => {
  return (
    <>
      <>
        {filterArrays.map((array, i) => {
          return (
            <CustomColumn
              key={i}
              isShow={customData[array.index]}
              onClick={() => onClickToggleCustom(array.label)}
            >
              {array.label}
            </CustomColumn>
          );
        })}
      </>
    </>
  );
};

const MainPageTableTabs = ({
  date,
  tab,
  handleChangeTab,
  customData,
  setCustomData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickToggleCustom = dst => {
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

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
        <Divider orientation="vertical" flexItem />
        {!validDay(date) && <FilterAltIcon onClick={toggleModal} />}
      </Tabs>
      {isOpen && (
        <FilterModal
          customData={customData}
          onClickToggleCustom={handleClickToggleCustom}
        />
      )}
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
