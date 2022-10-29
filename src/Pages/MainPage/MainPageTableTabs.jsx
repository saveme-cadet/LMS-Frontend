import { useState } from 'react';
import { ModalBackground } from 'Components';
import CheckAttend from './CheckAttend';
import { validDay } from 'Utils';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';

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
  const [isConfirm, setIsConfirm] = useState(false);
  const [checkData, setCheckData] = useState(null);
  const tabValue = {
    0: '모든 유저',
    1: 'RED 팀 유저',
    2: 'BULE 팀 유저',
  };
  const checkValue = {
    NONE: '미체크',
    PRESENT: '출석',
    TARDY: '지각',
    ABSENT: '결석',
    OFFICIAL_ABSENT: '공결',
    ILLNESS: '병결',
    VACATION: '휴가',
  };
  const selectValue = {
    checkIn: '체크인',
    checkOut: '체크아웃',
  };

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleClickTab = (event, select) => {
    setAnchorEl(event.currentTarget);
    setSelect(select);
  };

  const handleAllCheck = value => {
    setIsConfirm(true);
    setCheckData(value);
    setAnchorEl(null);
  };

  const handleClickConfirm = () => {
    handleChangeAllCheck(select, checkData);
    setIsConfirm(false);
    setCheckData(null);
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
      {isConfirm && (
        <ModalBackground setIsOpen={setIsConfirm}>
          <ConfirmContainer>
            <h2>
              {`${tabValue[tab]}의 ${selectValue[select]}를 ${checkValue[checkData]}로 수정하려는 것이 맞습니까?`}
            </h2>

            <div className="buttons">
              <Button onClick={handleClickConfirm}>확인</Button>
              <Button onClick={() => setIsConfirm(false)}>취소</Button>
            </div>
          </ConfirmContainer>
        </ModalBackground>
      )}
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

const ConfirmContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
