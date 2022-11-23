import { useState, useContext } from 'react';

import { AuthContext } from 'Store';
import CheckAttend from './CheckAttend';
import WrongDay from './WrongDay';
import { validDay, isWrongAccess, mainTableColumns } from 'Utils';
import { CHECK_IN, CHECK_OUT } from 'Utils/constants';

import AllTableService from 'API/AllTableService';

import { getMonth } from 'date-fns';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const MainPageTable = ({ date, selectRowData, getUsers, customData }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ attendanceId: '', select: '' });
  const tableColumns = mainTableColumns.filter((item, i) => customData[i]);

  const auth = useContext(AuthContext);
  const role = auth.status.role;

  const handleClickCell = (params, event) => {
    const today = new Date();

    const field = params.field;
    if (field !== CHECK_IN && field !== CHECK_OUT) return;

    if (getMonth(today) !== getMonth(date)) {
      alert('지난 달의 기록은 수정할 수 없습니다.');
      return;
    }

    if (isWrongAccess(role)) {
      alert('수정 권한이 없습니다.');
      return;
    }

    setAnchorEl(event.currentTarget);
    setCurFocus({
      attendanceId: params.row.attendanceId,
      userId: params.row.userId,
      select: field,
    });
  };

  const handleChangeCheck = async value => {
    const attendanceId = curFocus.attendanceId;
    const userId = curFocus.userId;
    const select = curFocus.select;

    const selectUserInfo = selectRowData.find(
      array => array.attendanceId === attendanceId,
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

    if (select === CHECK_IN) {
      await AllTableService.putAllTableCheckIn(userId, attendanceId, {
        status: value,
      });
    } else {
      await AllTableService.putAllTableCheckOut(userId, attendanceId, {
        status: value,
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
