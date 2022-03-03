import { useState, useEffect } from 'react';

import { UserInfoService, AllTableService, testAPIService } from 'Network';
import { adminCloumns } from 'Utils';

import SelectedUser from './SelectedUser';
import NewUserForm from './NewUserForm';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Styled from './AdminPage.styled';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState(null);
  const [rowData, setRowData] = useState(null);

  const handleCellClick = e => {
    setSelect(e.id);
  };
  const handleChangeAttend = async status => {
    const result = await UserInfoService.putModifyAttend(select, status);
    getUser();
  };
  const handleChangeTeam = async status => {
    const result = await UserInfoService.putModifyTeam(select, status);
    getUser();
  };
  const handleChangeRole = async role => {
    const result = await UserInfoService.putModifyRole(select, role);
    getUser();
  };
  const handleChangeVacation = async value => {
    let result;
    if (value > 0) result = await UserInfoService.putModifyVacationPlus(select);
    else result = await UserInfoService.putModifyVacationMinus(select);
    getUser();
  };

  const handleCreateUser = async data => {
    const result = await testAPIService.postUser(data);
    getUser();
  };

  const handleClickDeleteUser = async () => {
    const result = await UserInfoService.deleteUserInfo(select);
    setSelect(null);
    getUser();
  };

  const getUser = async () => {
    const result = await UserInfoService.getAllUser(5);
    setUsers(result.data);
    const newArray = [];

    result.data.map((array, i) => {
      const newData = {
        id: i,
        userName: array.userName,
        attendeStatus: array.attendeStatus ? '참가' : '불참',
        team: array.team,
        attendScore: array.attendScore,
        role: array.role,
        vacation: array.vacation,
      };
      newArray.push(newData);
    });
    // 임시
    // const newData = {
    //   id: 0,
    //   userName: 'gaga',
    //   attendeStatus: '참가',
    //   team: 'red',
    //   attendScore: 1.4,
    //   role: '머슴',
    //   vacation: 5,
    // };
    // newArray.push(newData);
    // 임시
    setRowData(newArray);
    console.log(newArray);
  };

  useEffect(() => {
    getUser();
  }, []);

  // const temp = async () => {
  //   let i = 0;
  //   while (i < 6) {
  //     const result = await AllTableService.postAllTable(i);
  //     i++;
  //   }
  // };

  return (
    <Styled.AdminBackground>
      <Styled.AdminTable>
        <Box className="table" sx={{ width: '100%', bgcolor: '#fff' }}>
          {rowData && (
            <DataGrid
              rows={rowData}
              columns={adminCloumns}
              onCellClick={handleCellClick}
              getRowClassName={params => {
                console.log(params.row.team);
                return params.row.team === 'red' ? 'red' : 'blue';
              }}
              hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
              hideFooterSelectedRowCount={true} // row count 숨기기
            />
          )}
        </Box>
      </Styled.AdminTable>
      <Styled.AdminChange>
        <h1>자정(00:00)을 기준으로 수정사항이 출결표에 갱신됩니다</h1>

        <div className="select">
          <h1>멤버 정보 수정</h1>
          {select !== null && (
            <SelectedUser
              userInfo={rowData[select]}
              onClickChangeAttend={handleChangeAttend}
              onClickChangeTeam={handleChangeTeam}
              onClickChangeRole={handleChangeRole}
              onClickChangeVacation={handleChangeVacation}
              onClickDeleteUser={handleClickDeleteUser}
            />
          )}
        </div>
      </Styled.AdminChange>
      <NewUserForm callbackSubmit={handleCreateUser} />
      <Button>팀 섞기</Button>
      <h1>팀섞기</h1>
      <h3>
        실수로 누를 수도 있으니 확정하시겠습니까 버튼으로 API 전송 or 문자 따라
        치기 상태가 참가인 유저에 한해서 섞기, 모달창 띄울까?
      </h3>
      {/* <button onClick={temp}>일회용</button> */}
    </Styled.AdminBackground>
  );
};

export default AdminPage;
