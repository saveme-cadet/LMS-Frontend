import { useState, useEffect, useContext } from 'react';

import { AuthContext } from 'App';
import { adminTableColumns } from 'Utils';
import { UserInfoService, CRUDUserService } from 'API';

import { ShowToday, NotValid } from 'Components';
import SelectedUser from './SelectedUser';
import AddVacation from './AddVacation';
import AttendLeaderboard from './AttendLeaderboard';
import ShakeTeam from './ShakeTeam';
import NewUserForm from './NewUserForm';
import { DataGrid } from '@mui/x-data-grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

import Styled from './AdminPage.styled';

const AdminPage = () => {
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [selectUserId, setSelectUserId] = useState(null);

  const [tab, setTab] = useState(0);
  const [rowData, setRowData] = useState(null);
  const [selectRowData, setSelectRowData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const auth = useContext(AuthContext);
  const userRole = auth.status.role;
  const userId = auth.status.userId;

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
    // console.log('id : ', e.id);
  };

  const handleChangeAttend = async event => {
    const value = event.target.value === '참가' ? 1 : 0;
    if (value === 0) {
      if (validChangeRole()) return;
      let temp = await UserInfoService.putRole(selectUserId, '카뎃');
      // temp = await UserInfoService.putTeam(selectUserId, 'white');
    }
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

  const validChangeRole = () => {
    if (selectUserId === +userId) {
      if (rowData.filter(data => data.role === '머슴').length === 1) {
        alert('머슴이 한 명 뿐입니다!');
        return -1;
      }
      const select = confirm(
        '다른 사람에게 머슴을 넘겨주셨나요? 변경하는 즉시 로그아웃됩니다.',
      );
      if (!select) return -1;
      handleLogout();
    }
    return 0;
  };

  const handleChangeRole = async event => {
    // console.log(selectUserId, userId);
    if (validChangeRole()) return;

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

  const handleLogout = async () => {
    const result = CRUDUserService.postLogout();
    localStorage.clear();
    auth.setStatus(null);
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
    // console.log('auth', auth);
  }, []);

  return (
    <Styled.AdminBackground>
      <div className="time">
        <ShowToday date={date} />
      </div>
      {userRole === '머슴' ? (
        <>
          <Styled.AdminFeature>
            <div>
              <Button
                onClick={() => {
                  setIsOpen('add');
                }}
              >
                일괄 휴가 변경
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
            <div className="table box">
              <Tabs value={tab} onChange={handleChangeTab}>
                <Tab label="전체 보기" />
                <Tab label="참가한 사용자" />
                <Tab label="불참한 사용자" />
              </Tabs>
              {selectRowData && (
                <DataGrid
                  rows={selectRowData}
                  columns={adminTableColumns}
                  onCellClick={handleCellClick}
                  getRowClassName={params => {
                    return params.row.attendeStatus === '불참' && 'out';
                  }}
                  hideFooterPagination={true} // 페이지 네이션 비활성화, 전체, 빨간팀, 파란팀?
                  hideFooterSelectedRowCount={true} // row count 숨기기
                />
              )}
            </div>
          </Styled.AdminTable>
          <Styled.AdminChange>
            <div className="select box">
              <span className="title">멤버 정보 수정</span>자정(00:00)을
              기준으로 수정사항이 출결표에 갱신됩니다
              {selectUserId !== null && (
                <SelectedUser
                  userInfo={rowData.find(array => array.id === selectUserId)}
                  onClickChangeAttend={handleChangeAttend}
                  onClickChangeTeam={handleChangeTeam}
                  onClickChangeRole={handleChangeRole}
                  onClickChangeVacation={handleChangeVacation}
                />
              )}
            </div>
          </Styled.AdminChange>

          <Styled.Modal>
            {isOpen === 'add' && (
              <AddVacation
                setIsOpen={setIsOpen}
                attendUser={rowData.filter(
                  user => user.attendeStatus === '참가',
                )}
                addVacation={handleAddVacation}
                minusVacation={handleMinusVacation}
              />
            )}
          </Styled.Modal>
          <Styled.Modal>
            {isOpen === 'find' && (
              <AttendLeaderboard
                setIsOpen={setIsOpen}
                attendUser={rowData.filter(
                  user => user.attendeStatus === '참가',
                )}
              />
            )}
          </Styled.Modal>
          <Styled.Modal>
            {isOpen === 'shake' && (
              <Styled.ShakeTeam>
                <ShakeTeam
                  setIsOpen={setIsOpen}
                  attendUser={rowData.filter(
                    user => user.attendeStatus === '참가',
                  )}
                  onClickChangeShuffleTeam={handleChangeShuffleTeam}
                />
              </Styled.ShakeTeam>
            )}
          </Styled.Modal>
        </>
      ) : (
        <NotValid code={0} />
      )}
    </Styled.AdminBackground>
  );
};

export default AdminPage;
