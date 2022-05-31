import { useState } from 'react';

import { checkCloumns, validDay, canChangeCheckInOut, constants } from 'Utils';
import AllTableService from 'Network/AllTableService';

import { format } from 'date-fns';

import CheckAttend from './CheckAttend';
import WrongDay from './WrongDay';
import { DataGrid } from '@mui/x-data-grid';

import styled from 'styled-components';

const MainPageTable = ({ date, rowData, selectRowData, getUsers, userId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });
  const TARGET_AUTH = constants.TARGET_AUTH;

  const handleClickCell = (params, event) => {
    const field = params.field;
    if (field !== constants.CHECK_IN && field !== constants.CHECK_OUT) return;

    const selectUserInfo = selectRowData.find(array => array.id === params.id);
    const myInfo = rowData.find(array => array.id === +userId);
    if (myInfo === undefined) {
      alert('이번 달에 참가하고 있지 않습니다!');
      return;
    }

    const valid = canChangeCheckInOut(
      selectUserInfo,
      myInfo.id,
      myInfo.role,
      myInfo.team,
    );
    if (valid) {
      valid === TARGET_AUTH.CADET_OTHER_CADET
        ? alert('수정 권한이 없습니다!')
        : alert('다른 팀입니다!');
      return;
    }
    setAnchorEl(event.currentTarget);
    setCurFocus({ id: params.id, select: field });
  };

  const handleChangeCheck = async value => {
    const id = curFocus.id;
    const select = curFocus.select;
    const today = new Date();
    let result;
    const selectUserInfo = selectRowData.find(array => array.id === id);

    if (value === 6 && selectUserInfo.vacation === 0) {
      alert('사용할 수 있는 휴가가 없습니다!');
      setAnchorEl(null);
      return;
    }
    if (
      today.getFullYear() !== date.getFullYear() ||
      today.getMonth() !== date.getMonth()
    ) {
      alert('지난 달 기록은 수정할 수 없습니다!');
      setAnchorEl(null);
      return;
    }
    if (select === 'checkIn') {
      result = await AllTableService.putAllTableCheckIn({
        userId: id,
        checkIn: value,
        tableDay: format(date, 'yyyy-MM-dd'),
      });
    } else {
      result = await AllTableService.putAllTableCheckOut({
        userId: id,
        checkOut: value,
        tableDay: format(date, 'yyyy-MM-dd'),
      });
    }
    setAnchorEl(null);
    getUsers();
  };

  return (
    <>
      {validDay(date) ? (
        <WrongDay wrongType={validDay(date)} />
      ) : (
        <>
          <DataGrid
            rows={selectRowData}
            columns={checkCloumns}
            onCellClick={handleClickCell}
            hideFooterPagination={true} // 페이지 네이션 비활성화
            hideFooterSelectedRowCount={true} // row count 숨기기
            getRowClassName="cell"
          />
          <CheckAttend
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onChangeCheck={handleChangeCheck}
          />
        </>
      )}
    </>
  );
};

export default MainPageTable;

const MainPageTableContainer = styled.div`
  .info {
    width: 8em;
    padding: 0.2em;
    border-radius: 10em;
    text-align: center;
  }
  .red {
    background-color: #dc143c;
  }
  .blue {
    background-color: #0079f0;
  }
  .머슴 {
    background-color: yellow;
  }
  .카뎃 {
    background-color: #cccccc;
  }

  .type {
    color: #ffffff;
    width: 8em;
    padding: 0.2em;
    border-radius: 10em;
    text-align: center;
  }
  .check {
    background-color: #2ce054;
  }
  .late {
    background-color: #ffcb46;
  }
  .not {
    background-color: #ff4646;
  }
  .vacancy {
    background-color: #a477ee;
  }
  .illness {
    background-color: #a477ee;
  }
  .vacation {
    background-color: #2891f1;
  }
`;
