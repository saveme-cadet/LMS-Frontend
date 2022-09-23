import { useState } from 'react';

import { validDay, isWrongAccess, mainTableColumns } from 'Utils';
import { CHECK_IN, CHECK_OUT } from 'Utils/constants';
import AllTableService from 'API/AllTableService';

import CheckAttend from './CheckAttend';
import WrongDay from './WrongDay';

import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';

const MainPageTable = ({
  date,
  selectRowData,
  getUsers,
  userId,
  customData,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ attendanceId: '', select: '' });
  const tableColumns = mainTableColumns.filter((item, i) => customData[i]);

  const handleClickCell = (params, event) => {
    const field = params.field;
    if (field !== CHECK_IN && field !== CHECK_OUT) return;

    // const selectUserInfo = selectRowData.find(array => array.id === params.id);
    // const myInfo = rowData.find(array => array.id === +userId);
    // if (myInfo === undefined) {
    //   alert('이번 달에 참가하고 있지 않습니다!');
    //   return;
    // }

    // if (isWrongAccess(selectUserInfo, myInfo.id, myInfo.role, myInfo.team)) {
    //   alert('수정할 수 없습니다!');
    //   return;
    // }
    setAnchorEl(event.currentTarget);
    setCurFocus({ attendanceId: params.id, select: field });
  };

  const handleChangeCheck = async value => {
    const attendanceId = curFocus.attendanceId;
    const select = curFocus.select;
    const today = new Date();
    let result;
    const selectUserInfo = selectRowData.find(
      array => array.id === attendanceId,
    );
    const originValue =
      select === CHECK_IN ? selectUserInfo.checkIn : selectUserInfo.checkOut;

    if (originValue === value) return;
    // 이전 선택과 동일할 경우 return
    if (value === 'VACATION' && selectUserInfo.vacation === 0) {
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
    const userId = localStorage.getItem('userId');
    if (select === CHECK_IN) {
      result = await AllTableService.putAllTableCheckIn(userId, attendanceId, {
        status: '' + value,
      });
    } else {
      result = await AllTableService.putAllTableCheckOut(userId, attendanceId, {
        status: '' + value,
      });
    }
    setAnchorEl(null);
    getUsers();
  };

  return (
    <MainPageTableContainer>
      <MainPageBody>
        {validDay(date) ? (
          <WrongDay wrongType={validDay(date)} />
        ) : (
          <>
            {selectRowData && (
              <DataGrid
                rows={selectRowData}
                columns={tableColumns}
                onCellClick={handleClickCell}
                hideFooterPagination={true} // 페이지 네이션 비활성화
                hideFooterSelectedRowCount={true} // row count 숨기기
                getRowClassName={() => {
                  return 'cell';
                }}
              />
            )}
            <CheckAttend
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              onChangeCheck={handleChangeCheck}
            />
          </>
        )}
      </MainPageBody>
    </MainPageTableContainer>
  );
};

export default MainPageTable;

const MainPageTableContainer = styled.div`
  border: 1px solid #c0c0c0;
  padding: 1em;
  border-radius: 1em;
  height: 550px;
  position: relative;
`;

const MainPageBody = styled.div`
  height: calc(100% - 50px);
  .MuiDataGrid-footerContainer {
    display: none;
  }
  .info {
    width: 8em;
    padding: 0.2em;
    border-radius: 10em;
    text-align: center;
  }
  .RED {
    background-color: #dc143c;
  }
  .BLUE {
    background-color: #0079f0;
  }
  .ROLE_ADMIN {
    background-color: #ff8c00;
  }

  .ROLE_MANAGER {
    background-color: #ffff00;
  }

  .ROLE_USER {
    background-color: #aeb7ba;
  }
  .ROLE_UNAUTHORIZED {
    background-color: #575b5d;
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
