import { useState } from 'react';

import { checkCloumns, validDay, isValidCheck } from 'Utils';
import AllTableService from 'Network/AllTableService';

import { format } from 'date-fns';

import PopoverCheckAttend from './PopoverCheckAttend';
import WrongDay from './WrongDay';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const MainPageTable = ({
  tab,
  handleChangeTab,
  date,
  rowData,
  selectRowData,
  getUsers,
  userId,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curFocus, setCurFocus] = useState({ id: '', select: '' });

  const handleClickCell = (params, event) => {
    const field = params.field;
    if (field !== 'checkIn' && field !== 'checkOut') return;

    const selectUserInfo = selectRowData.find(array => array.id === params.id);
    const myInfo = rowData.find(array => array.id === +userId);
    // console.log('myinfo :', myInfo);
    // console.log('selectUserInfo : ', selectUserInfo);
    if (myInfo === undefined) {
      alert('이번 달에 참가하고 있지 않습니다!');
      return;
    }

    const valid = isValidCheck(
      selectUserInfo,
      myInfo.id,
      myInfo.role,
      myInfo.team,
    );
    // console.log('valud:', valid);
    if (valid) {
      valid === -1 ? alert('수정 권한이 없습니다!') : alert('다른 팀입니다!');
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
    // console.log('id : ', id, value);
    // console.log('row', selectRowData);
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
      <Box className="table">
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="전체 보기" />
          <Tab label="레드 팀" />
          <Tab label="블루 팀" />
        </Tabs>
        {validDay(date) ? (
          <WrongDay wrongType={validDay(date)} />
        ) : (
          <>
            <DataGrid
              rows={selectRowData}
              columns={checkCloumns}
              onCellClick={handleClickCell}
              hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
              hideFooterSelectedRowCount={true} // row count 숨기기
              getRowClassName="cell"
            />
            <PopoverCheckAttend
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              onChangeCheck={handleChangeCheck}
            />
          </>
        )}
      </Box>
    </>
  );
};

export default MainPageTable;