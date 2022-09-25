import { useState, useEffect } from 'react';
import { UserInfoService, VacationService, AllTableService } from 'API';
import { API_PARAMS } from 'Utils/constants';

import AdminModalButton from './AdminModalButton';
import AdminTable from './AdminTable';
import AdminChangeTable from './AdminChangeTable';
import AdminModal from './AdminModal';
import { addDays, format } from 'date-fns';

const AdminContainer = ({ auth, userId, isOpen, setIsOpen }) => {
  const [users, setUsers] = useState([]);
  const [selectUserId, setSelectUserId] = useState(null);

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);
  const [usersAttendence, setUsersAttendence] = useState([]);
  const today = format(new Date(), 'yyyy-MM-dd');

  const updateSelectRowData = (curArrays, curTab) => {
    const filterArray = [];
    let filter = '';
    if (curTab === 1) filter = 'NOT_PARTICIPATED';
    else if (curTab === 2) filter = 'PARTICIPATED';
    curArrays.map(array => {
      if (array.attendStatus !== filter) filterArray.push(array);
    });

    setSelectRowData(filterArray);
  };

  const handleChangeShuffleTeam = async (userId, team) => {
    const result = await UserInfoService.patchTeam(userId, team);
    getUser();
  };

  const handleAddVacation = async (select, addedDays) => {
    const body = {
      addedDays: addedDays,
    };
    const result = await VacationService.addVacation(select, body);
    getUser();
    setSelectUserId(null);
  };
  const handleMinusVacation = async (select, usedDays) => {
    const body = { usedDays: usedDays, reason: 'Applied to all users.' };
    const selectUser = rowData.filter(user => user.id === select);
    if (selectUser[0].vacation === 0) {
      // console.log('감소시킬 휴가가 없습니다!');
      return;
    }
    const result = await VacationService.useVacation(select, body);
    getUser();
    setSelectUserId(null);
  };

  // const handleGetUser = async () => {
  //   const result = await CRUDUserService.getUser();
  //   // console.log(result.data);
  // };

  // const handleDeleteUser = async data => {
  //   const result = await CRUDUserService.deleteUser(data);
  //   getUser();
  //   setSelectUserId(null);
  // };

  const getUser = async () => {
    const result = await UserInfoService.getAllUser(0, 1000);
    setUsers(result.data.content);
    const newArray = [];

    result.data.content.map(array => {
      const newData = {
        id: array.id,
        userName: array.nickname,
        attendStatus: array.attendStatus,
        team: array.team,
        absentScore: array.absentScore,
        attendanceScore: array.attendanceScore,
        role: array.role,
        vacation: array.vacation,
      };
      newArray.push(newData);
    });
    console.log(newArray);
    setRowData(newArray);
    updateSelectRowData(newArray, tab);
  };

  const getUserAttendance = async () => {
    const result = await AllTableService.getTable(today);
    setUsersAttendence(result.data);
  };

  useEffect(() => {
    getUser();
    getUserAttendance();
  }, []);

  return (
    <>
      <AdminModalButton setIsOpen={setIsOpen} />
      <AdminTable
        tab={tab}
        setTab={setTab}
        rowData={rowData}
        updateSelectRowData={updateSelectRowData}
        selectRowData={selectRowData}
        setSelectUserId={setSelectUserId}
      />
      <AdminChangeTable
        rowData={rowData}
        selectUserId={selectUserId}
        setSelectUserId={setSelectUserId}
        getUser={getUser}
        userId={userId}
        auth={auth}
      />
      <AdminModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        rowData={rowData}
        usersAttendence={usersAttendence}
        handleChangeShuffleTeam={handleChangeShuffleTeam}
        handleAddVacation={handleAddVacation}
        handleMinusVacation={handleMinusVacation}
      />
    </>
  );
};
export default AdminContainer;
