import { useState } from 'react';

import { validDay, isWrongAccess, mainTableColumns } from 'Utils';
import { CHECK_IN, CHECK_OUT } from 'Utils/constants';
import AllTableService from 'API/AllTableService';

import { format } from 'date-fns';

import CheckAttend from './CheckAttend';
import WrongDay from './WrongDay';
import { DataGrid } from '@mui/x-data-grid';

const MainPageTable = ({
  date,
  rowData,
  selectRowData,
  getUsers,
  userId,
  customData,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });
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
    setCurFocus({ attendanceId: params.attendanceId, select: field });
  };

  const handleChangeCheck = async value => {
    const attendanceId = curFocus.attendanceId;
    const select = curFocus.select;
    const today = new Date();
    let result;
    const selectUserInfo = selectRowData.find(
      array => array.attendanceId === attendanceId,
    );

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
    <>
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
    </>
  );
};

export default MainPageTable;
