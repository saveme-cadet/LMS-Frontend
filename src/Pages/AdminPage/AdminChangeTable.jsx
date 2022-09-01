import { UserInfoService, CRUDUserService } from 'API';

import SelectedUser from './SelectedUser';

import styled from 'styled-components';

const AdminChangeTable = ({
  selectUserId,
  setSelectUserId,
  rowData,
  getUser,
  userId,
  auth,
}) => {
  const handleLogout = async () => {
    const result = CRUDUserService.postLogout();
    localStorage.clear();
    auth.setStatus(null);
  };

  const validChangeRole = () => {
    if (selectUserId === +userId) {
      if (rowData.filter(data => data.role === 'ROLE_MANAGER').length === 1) {
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

  const handleChangeAttend = async event => {
    const value = event.target.value === 'PARTICIPATED' ? 1 : 0;
    if (value === 0) {
      if (validChangeRole()) return;
      let temp = await UserInfoService.patchRole(selectUserId, 'ROLE_USER');
      // temp = await UserInfoService.patchTeam(selectUserId, 'NONE');
    }
    const result = await UserInfoService.putAttend(selectUserId, value);
    getUser();
    setSelectUserId(null);
  };

  const handleChangeTeam = async event => {
    const result = await UserInfoService.patchTeam(
      selectUserId,
      event.target.value,
    );
    getUser();
    setSelectUserId(null);
  };

  const handleChangeRole = async event => {
    // console.log(selectUserId, userId);
    if (validChangeRole()) return;

    const result = await UserInfoService.patchRole(
      selectUserId,
      event.target.value,
    );
    getUser();
    setSelectUserId(null);
  };

  const handleChangeVacation = async value => {
    let result;
    // TODO: vacation API 수정중 백엔드
    // if (value > 0) result = await UserInfoService.putVacationPlus(selectUserId);
    // else result = await UserInfoService.putVacationMinus(selectUserId);
    getUser();
    setSelectUserId(null);
  };

  return (
    <AdminChangeTableBody>
      <AdminChangeTableContainer>
        <AdminChangeTableTitle>멤버 정보 수정</AdminChangeTableTitle>
        자정(00:00)을 기준으로 수정사항이 출결표에 갱신됩니다
        {selectUserId !== null && (
          <SelectedUser
            userInfo={rowData.find(array => array.id === selectUserId)}
            onClickChangeAttend={handleChangeAttend}
            onClickChangeTeam={handleChangeTeam}
            onClickChangeRole={handleChangeRole}
            onClickChangeVacation={handleChangeVacation}
          />
        )}
      </AdminChangeTableContainer>
    </AdminChangeTableBody>
  );
};

const AdminChangeTableBody = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 1em;
  padding: 1em;
  height: 50%;

  .action > * {
    color: #292929;
    width: 8em;
    height: 4em;
    margin: 0 0.5em 0 0.5em;
  }
  .user-status > * {
    margin: 0.4em;
  }
  .불참 {
    color: white;
    background-color: black;
  }
  .참가 {
    color: black;
    border: 1px solid black;
    background-color: white;
  }
  .red {
    background-color: #dc143c;
  }
  .blue {
    background-color: #0079f0;
  }
  .머슴 {
    background-color: yellow;
  }
  .카뎃 {
    background-color: #cccccc;
  }
`;
const AdminChangeTableContainer = styled.div`
  padding: 1em;
  border-radius: 1em;
  text-align: left;
`;
const AdminChangeTableTitle = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export default AdminChangeTable;
