import { useState, useEffect } from 'react';

import { UserInfoService, testAPIService } from 'Network';

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const columns = [
  {
    field: 'id',
    headerName: '#',
    width: 120,
  },
  {
    field: 'userName',
    headerName: '이름',
    type: 'string',
    width: 120,
  },
  {
    field: 'attendeStatus',
    headerName: '참여 상태',
    type: 'string',
    width: 120,
  },
  {
    field: 'team',
    headerName: '팀',
    type: 'string',
    width: 120,
  },
  {
    field: 'attendScore',
    headerName: '출결 점수',
    type: 'number',
    width: 120,
  },
  {
    field: 'role',
    headerName: '역할',
    type: 'string',
    width: 120,
  },
  {
    field: 'vacation',
    headerName: '휴가',
    type: 'number',
    width: 120,
  },
];

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [rowData, setRowData] = useState(null);

  const getUser = async () => {
    // const test = await testAPIService.postUser('makeall', {
    //   name: '1234',

    //   email: '12412422', // 중복되면 안됨.

    //   password: 'gsdagsd',
    //   birthday: '2022-02-18',
    // });
    // console.log(test);
    const result = await UserInfoService.getAllUser(1);
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
    setRowData(newArray);
    console.log(newArray);
    console.log('asfasfhgoa');
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: '#fff' }}>
        {rowData && (
          <DataGrid
            rows={rowData}
            columns={columns}
            // hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
            // hideFooterSelectedRowCount={true} // row count 숨기기
          />
        )}
      </Box>
      <h1>뭘 선택했냐에 따라 or 사람 선택에 따라</h1>
      <h3>참여 상태 변경</h3>
      <h3>팀 변경</h3>
      <h3>역할 변경?</h3>
      <h3>휴가 변경 </h3>
      <h1>인원 추가, 인원 삭제</h1>
      <h1>팀섞기</h1>
      <h3>
        실수로 누를 수도 있으니 확정하시겠습니까 버튼으로 API 전송 or 문자 따라
        치기
      </h3>
    </>
  );
};

export default AdminPage;
