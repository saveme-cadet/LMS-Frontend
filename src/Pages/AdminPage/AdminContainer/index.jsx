import { useState, useEffect } from 'react';
import { UserInfoService } from 'API';

import AdminModalButton from './AdminModalButton';
import AdminTable from './AdminTable';
import AdminChangeTable from './AdminChangeTable';
import AdminModal from './AdminModal';

const AdminContainer = ({ auth, userId, isOpen, setIsOpen }) => {
  const [users, setUsers] = useState([]);
  const [selectUserId, setSelectUserId] = useState(null);

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);

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
        getUser={getUser}
        setSelectUserId={setSelectUserId}
      />
    </>
  );
};
export default AdminContainer;
