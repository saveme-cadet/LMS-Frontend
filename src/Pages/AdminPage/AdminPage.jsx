import { useState, useEffect } from 'react';

import { UserInfoService, testAPIService } from 'Network';
import { adminCloumns } from 'Utils';

import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Styled from './AdminPage.styled';

const SelectedUser = ({ userInfo }) => {
  return (
    <>
      <h1>현재 선택 : {userInfo.userName}</h1>
      <Button variant="contained">참가 상태 변경</Button>
      <Button variant="contained">팀 변경</Button>
      <Button variant="contained">역할 변경</Button>
      <Button variant="contained">휴가 + 1</Button>
      <Button variant="contained">휴가 - 1</Button>
    </>
  );
};

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [select, setSelect] = useState(null);
  const [rowData, setRowData] = useState(null);

  const handleCellClick = e => {
    console.log(e);
    setSelect(e.id);
  };

  const getUser = async () => {
    // const test = await testAPIService.postUser('makeall', {
    //   name: '1234',
    //   email: '12412422', // 중복되면 안됨.
    //   password: 'gsdagsd',
    //   birthday: '2022-02-18',
    // });
    // console.log(test);

    // // 서버 꺼짐
    // const result = await UserInfoService.getAllUser(1);
    // setUsers(result.data);
    const newArray = [];

    // result.data.map((array, i) => {
    //   const newData = {
    //     id: i,
    //     userName: array.userName,
    //     attendeStatus: array.attendeStatus ? '참가' : '불참',
    //     team: array.team,
    //     attendScore: array.attendScore,
    //     role: array.role,
    //     vacation: array.vacation,
    //   };
    //   newArray.push(newData);
    // });
    // 임시
    const newData = {
      id: 0,
      userName: 'gaga',
      attendeStatus: '참가',
      team: 'red',
      attendScore: 1.4,
      role: '머슴',
      vacation: 5,
    };
    newArray.push(newData);
    // 임시

    setRowData(newArray);
    console.log(newArray);
    console.log('asfasfhgoa');
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Styled.AdminBackground>
      <Styled.AdminTable>
        <Box className="table" sx={{ width: '100%', bgcolor: '#fff' }}>
          {rowData && (
            <DataGrid
              rows={rowData}
              columns={adminCloumns}
              onCellClick={handleCellClick}
              hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
              hideFooterSelectedRowCount={true} // row count 숨기기
            />
          )}
        </Box>
      </Styled.AdminTable>
      <Styled.AdminChange>
        <div className="select">
          <h1>멤버 정보 수정</h1>
          {select !== null && <SelectedUser userInfo={rowData[select]} />}
        </div>

        <h1>뭘 선택했냐에 따라 or 사람 선택에 따라</h1>
        <h3>참여 상태 변경</h3>
        <h3>팀 변경</h3>
        <h3>역할 변경?</h3>
        <h3>휴가 변경 </h3>
        <h1>인원 추가, 인원 삭제 (input 태그로 입력받기로?)</h1>
        <h1>팀섞기</h1>
        <h3>
          실수로 누를 수도 있으니 확정하시겠습니까 버튼으로 API 전송 or 문자
          따라 치기
        </h3>
      </Styled.AdminChange>
    </Styled.AdminBackground>
  );
};

export default AdminPage;
