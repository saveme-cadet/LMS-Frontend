import { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { validDay } from 'Utils';

import styled from 'styled-components';

const MainPageTableTabs = ({
  date,
  tab,
  handleChangeTab,

  setIsOpen,
}) => {
  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="전체 보기" />
        <Tab label="레드 팀" />
        <Tab label="블루 팀" />
        <Divider orientation="vertical" flexItem />
        {!validDay(date) && (
          <FilterIcon onClick={toggleModal}>
            <span>필터링</span>
            <FilterAltIcon />
          </FilterIcon>
        )}
      </Tabs>
    </>
  );
};

export default MainPageTableTabs;

const FilterIcon = styled.span`
  cursor: pointer;
  display: flex;
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
`;
