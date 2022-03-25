import { useState, useEffect } from 'react';

import { UserInfoService, CRUDUserService } from 'Network';
import { adminCloumns } from 'Utils';

import SelectedUser from './SelectedUser';
import AddVacation from './AddVacation';
import FindTarget from './FindTarget';
import ShakeTeam from './ShakeTeam';
import NewUserForm from './NewUserForm';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Styled from './AdminPage.styled';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [selectUserId, setSelectUserId] = useState(null);
  const [rowData, setRowData] = useState(null);

  const [tab, setTab] = useState(0);
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

  const handleChangeTab = (event, dstTab) => {
    setTab(dstTab);
    updateSelectRowData(rowData, dstTab);
  };

  const handleCellClick = e => {
    setSelectUserId(e.id);
    console.log('id : ', e.id);
  };

  const handleChangeAttend = async event => {
    const value = event.target.value === '참가' ? 1 : 0;
    const result = await UserInfoService.putAttend(selectUserId, value);
    getUser();
    setSelectUserId(null);
  };
  const handleChangeTeam = async event => {
    const result = await UserInfoService.putTeam(
      selectUserId,
      event.target.value,
    );
    getUser();
    setSelectUserId(null);
  };

  const handleChangeShuffleTeam = async (userId, team) => {
    const result = await UserInfoService.putTeam(userId, team);
    getUser();
  };

  const handleChangeRole = async event => {
    const result = await UserInfoService.putRole(
      selectUserId,
      event.target.value,
    );
    getUser();
    setSelectUserId(null);
  };
  const handleChangeVacation = async value => {
    let result;
    if (value > 0) result = await UserInfoService.putVacationPlus(selectUserId);
    else result = await UserInfoService.putVacationMinus(selectUserId);
    getUser();
    setSelectUserId(null);
  };
  const handleAddVacation = async select => {
    const result = await UserInfoService.putVacationPlus(select);
    getUser();
    setSelectUserId(null);
  };

  const handleCreateUser = async data => {
    const result = await CRUDUserService.postUser(data);
    getUser();
    setSelectUserId(null);
  };

  const handleGetUser = async () => {
    const result = await CRUDUserService.getUser();
    console.log(result.data);
  };

  const handleDeleteUser = async data => {
    const result = await CRUDUserService.deleteUser(data);
    getUser();
    setSelectUserId(null);
  };

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
    console.log(newArray);
    setRowData(newArray);
    updateSelectRowData(newArray, tab);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Styled.AdminBackground>
      <Styled.AdminFeature>
        <div>
          <Button
            onClick={() => {
              setIsOpen('add');
            }}
          >
            일괄 휴가 추가
          </Button>
          
          <Button
            onClick={() => {
              setIsOpen('find');
            }}
          >
            월렛 보상 대상
          </Button>
          
          <Button
            onClick={() => {
              setIsOpen('shake');
            }}
          >
            팀 섞기
          </Button>
          
        </div>
        <div>
          <Button>머슴이 할 일</Button>
        </div>
      </Styled.AdminFeature>
      <Styled.AdminTable>
        <Box className="table" sx={{ width: '100%', bgcolor: '#fff' }}>
          <Tabs value={tab} onChange={handleChangeTab}>
            <Tab label="전체 보기" />
            <Tab label="참가한 사용자" />
            <Tab label="불참한 사용자" />
          </Tabs>
          {selectRowData && (
            <DataGrid
              rows={selectRowData}
              columns={adminCloumns}
              onCellClick={handleCellClick}
              getRowClassName={params => {
                return params.row.attendeStatus === '불참' && 'out';
              }}
              hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
              hideFooterSelectedRowCount={true} // row count 숨기기
            />
          )}
        </Box>
      </Styled.AdminTable>
      <Styled.AdminChange>
        <div className="select box">
          <h1>멤버 정보 수정</h1>
          <h2>자정(00:00)을 기준으로 수정사항이 출결표에 갱신됩니다</h2>

          {selectUserId !== null && (
            <SelectedUser
              userInfo={rowData.find(array => array.id === selectUserId)}
              onClickChangeAttend={handleChangeAttend}
              onClickChangeTeam={handleChangeTeam}
              onClickChangeRole={handleChangeRole}
              onClickChangeVacation={handleChangeVacation}
              onClickDeleteUser={handleDeleteUser}
            />
          )}
        </div>
      </Styled.AdminChange>

      <Styled.AdminAddUser>
        <NewUserForm callbackSubmit={handleCreateUser} />
        {/* <button onClick={handleGetUser}>유저 얻기</button> */}
      </Styled.AdminAddUser>

      <Styled.Modal>
        {isOpen === 'add' && (
          <AddVacation
            setIsOpen={setIsOpen}
            attendUser={rowData.filter(user => user.attendeStatus === '참가')}
            addVacation={handleAddVacation}
          />
        )}
      </Styled.Modal>

      <Styled.Modal>
        {isOpen === 'find' && (
          <FindTarget
            setIsOpen={setIsOpen}
            attendUser={rowData.filter(user => user.attendeStatus === '참가')}
          />
        )}
      </Styled.Modal>

      <Styled.Modal>
        {isOpen === 'shake' && (
          <Styled.ShakeTeam>
            <ShakeTeam
              setIsOpen={setIsOpen}
              attendUser={rowData.filter(user => user.attendeStatus === '참가')}
              onClickChangeShuffleTeam={handleChangeShuffleTeam}
            />
          </Styled.ShakeTeam>
        )}
      </Styled.Modal>
    </Styled.AdminBackground>
  );
};

export default AdminPage;
