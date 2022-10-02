import { useState, useEffect } from 'react';
import { UserInfoService, AllTableService } from 'API';

import { format } from 'date-fns';

import AdminModalButton from './AdminModalButton';
import AdminTable from './AdminTable';
import AdminChangeTable from './AdminChangeTable';
import AdminModal from './AdminModal';

const AdminContainer = ({ auth, userId, isOpen, setIsOpen }) => {
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

  const getUser = async () => {
    const date = new Date();
    const dateFormat = format(date, 'yyyy-MM-dd');

    const result = await AllTableService.getAllTable(dateFormat);
    const newArray = result.data.map(array => ({
      id: array.userId,
      userId: array.userId,
      username: array.username,
      attendStatus: array.attendStatus,
      role: array.role,
      team: array.team,
      vacation: array.vacation,
      attendanceScore: array.attendanceScore,
      absentScore: array.totalAbsentScore,
      weekAbsentScore: array.weekAbsentScore,
    }));

    setRowData(newArray);
    updateSelectRowData(newArray, tab);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (rowData === null) return;
    console.log('selecteUserId', selectUserId);
    rowData.filter(data => {
      console.log(data);
      if (data.id === selectUserId && data.role === 'ROLE_ADMIN') {
        alert('admin의 정보는 변경할 수 없습니다!');
        setSelectUserId(null);
      }
    });
  }, [selectUserId]);

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
