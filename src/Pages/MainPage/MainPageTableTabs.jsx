import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import CheckAttend from './CheckAttend';
import { validDay } from 'Utils';

import styled from 'styled-components';

const MainPageTableTabs = ({
  date,
  tab,
  handleChangeTab,
  setIsOpen,
  handleChangeAllCheck,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [select, setSelect] = useState(null);
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleClickTab = (event, select) => {
    setAnchorEl(event.currentTarget);
    setSelect(select);
  };

  const handleAllCheck = async value => {
    handleChangeAllCheck(select, value);
    setAnchorEl(null);
  };
  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
        {validDay(date) === 0 && (
          <CustomTab onClick={toggleModal}>
            <span>필터링</span>
            <FilterAltIcon />
          </CustomTab>
        )}
        <CustomTab onClick={e => handleClickTab(e, 'checkIn')}>
          체크인 일괄 수정
        </CustomTab>
        <CustomTab onClick={e => handleClickTab(e, 'checkOut')}>
          체크아웃 일괄 수정
        </CustomTab>
      </Tabs>

      <CheckAttend
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onChangeCheck={handleAllCheck}
      />
    </>
  );
};

export default MainPageTableTabs;

const CustomTab = styled.span`
  cursor: pointer;
  display: flex;
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
`;
