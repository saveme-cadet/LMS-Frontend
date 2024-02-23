import { UserInfoService, CRUDUserService, VacationService } from 'API';
import { TEAM_NAME } from 'Utils/constants';
import SelectedUser from './SelectedUser';

import styled from 'styled-components';

const AdminChangeTable = ({
  selectusername,
  rowData,
  getUser,
  username,
  auth,
}) => {
  const handleLogout = async () => {
    await CRUDUserService.postLogout();
    localStorage.clear();
    auth.setStatus(null);
  };

  const validChangeRole = () => {
    if (selectusername === username) {
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
    if (event.target.value === 'NOT_PARTICIPATED') {
      if (validChangeRole()) return; // 불참일 경우 NONE으로 바꾸기
      await UserInfoService.patchTeam(selectusername, {
        team: TEAM_NAME.NONE,
      });
      await UserInfoService.patchRole(selectusername, {
        role: 'ROLE_UNAUTHORIZED',
      });
    } else if (event.target.value === 'PARTICIPATED') {
      await UserInfoService.patchTeam(selectusername, {
        team: TEAM_NAME.BLUE,
      }); // TODO: default team fixed
      await UserInfoService.patchRole(selectusername, {
        role: 'ROLE_USER',
      });
    }
    // TODO: 유저 참여 상태에 따라 NONE or 기본 팀(BLUE)로 설정(BACKEND)
    await UserInfoService.patchAttend(selectusername, {
      attendStatus: event.target.value,
    });
    getUser();
    // setSelectusername(null);
  };

  const handleChangeTeam = async event => {
    await UserInfoService.patchTeam(selectusername, {
      team: event.target.value,
    });
    getUser();
    // setSelectusername(null);
  };

  const handleChangeRole = async event => {
    // console.log(selectusername, username);
    if (validChangeRole()) return;

    await UserInfoService.patchRole(selectusername, {
      role: event.target.value,
    });
    getUser();
    // setSelectusername(null);
  };

  const handleChangeVacation = async value => {
    for (let i = 0; i < rowData.length; i++) {
      if (rowData[i].id === selectusername) {
        if (rowData[i].vacation === 0 && value < 0) {
          alert('감소시킬 휴가가 없습니다.');
          return;
        }
      }
    }

    if (value % 0.5 !== 0) {
      alert('0.5 단위로 입력해주세요.');
      return;
    }
    if (0 < value) {
      const body = {
        addedDays: value,
        reason: '단일 휴가 증가',
      };
      await VacationService.addVacation(selectusername, body);
    } else if (0 > value) {
      const body = {
        usedDays: -value,
        reason: '단일 휴가 감소',
      };
      await VacationService.useVacation(selectusername, body);
    }
    getUser();
    // setSelectusername(null);
  };

  return (
    <AdminChangeTableBody>
      <AdminChangeTableContainer>
        <AdminChangeTableTitle>멤버 정보 수정</AdminChangeTableTitle>
        자정(00:00)을 기준으로 수정사항이 출결표에 갱신됩니다
        {selectusername !== null && (
          <SelectedUser
            userInfo={rowData.find(array => array.id === selectusername)}
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

  .PARTICIPATED {
    color: black;
    border: 1px solid black;
    background-color: white;
  }

  .NOT_PARTICIPATED {
    color: white;
    background-color: black;
  }
  .RED {
    background-color: #dc143c;
  }
  .BLUE {
    background-color: #0079f0;
  }
  .ROLE_ADMIN {
    background-color: #ff8c00;
  }

  .ROLE_MANAGER {
    background-color: #ffff00;
  }

  .ROLE_USER {
    background-color: #aeb7ba;
  }
  .ROLE_UNAUTHORIZED {
    background-color: #575b5d;
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
