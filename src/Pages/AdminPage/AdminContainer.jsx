import { useState, useEffect } from 'react';
import { UserInfoService } from 'API';

import AdminModalButton from './AdminModalButton';
import AdminTable from './AdminTable';
import AdminChangeTable from './AdminChangeTable';
import AdminModal from './AdminModal';

import styled from 'styled-components';

const AdminContainer = ({ auth, userId }) => {
  const [users, setUsers] = useState([]);
  const [selectUserId, setSelectUserId] = useState(null);

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const updateSelectRowData = (curArrays, curTab) => {
    const filterArray = [];
    let filter = '';
    if (curTab === 1) filter = '불참';
    else if (curTab === 2) filter = '참가';
    curArrays.map(array => {
      if (array.attendeStatus !== filter) filterArray.push(array);
    });
    setSelectRowData(filterArray);
  };

  const handleChangeShuffleTeam = async (userId, team) => {
    const result = await UserInfoService.putTeam(userId, team);
    getUser();
  };

  const handleAddVacation = async select => {
    const result = await UserInfoService.putVacationPlus(select);
    getUser();
    setSelectUserId(null);
  };
  const handleMinusVacation = async select => {
    const selectUser = rowData.filter(user => user.id === select);
    if (selectUser[0].vacation === 0) {
      // console.log('감소시킬 휴가가 없습니다!');
      return;
    }
    const result = await UserInfoService.putVacationMinus(select);
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
    const result = await UserInfoService.getAllUser(5);
    setUsers(result.data);
    const newArray = [];

    result.data.map(array => {
      const newData = {
        id: array.userId,
        userName: array.userName,
        attendeStatus: array.attendeStatus ? '참가' : '불참',
        team: array.team,
        attendScore: array.attendScore,
        participateScore: array.participateScore,
        role: array.role,
        vacation: array.vacation,
      };
      newArray.push(newData);
    });
    // console.log(newArray);
    setRowData(newArray);
    updateSelectRowData(newArray, tab);
  };

  useEffect(() => {
    getUser();
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
        handleChangeShuffleTeam={handleChangeShuffleTeam}
        handleAddVacation={handleAddVacation}
        handleMinusVacation={handleMinusVacation}
      />
    </>
  );
};
export default AdminContainer;
