import { UserInfoService, CRUDUserService, VacationService } from 'API';
import { VACATION } from 'Utils/constants';
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
    if (event.target.value === 'NOT_PARTICIPATED') {
      if (validChangeRole()) return;
      let temp = await UserInfoService.patchRole(selectUserId, {
        role: 'ROLE_USER',
      });
    }
    const result = await UserInfoService.patchAttend(selectUserId, {
      attendStatus: event.target.value,
    });
    getUser();
    setSelectUserId(null);
  };

  const handleChangeTeam = async event => {
    const result = await UserInfoService.patchTeam(selectUserId, {
      team: event.target.value,
    });
    getUser();
    setSelectUserId(null);
  };

  const handleChangeRole = async event => {
    // console.log(selectUserId, userId);
    if (validChangeRole()) return;

    const result = await UserInfoService.patchRole(selectUserId, {
      role: event.target.value,
    });
    getUser();
    setSelectUserId(null);
  };

  const handleChangeVacation = async value => {
    let result;
    for (let i = 0; i < rowData.length; i++) {
      if (rowData[i].id === selectUserId) {
        if (rowData[i].vacation === 0 && value === VACATION.MINUS_HALF) {
          getUser();
          setSelectUserId(null);
          return;
        }
      }
    }
    if (value === VACATION.PLUS_HALF) {
      const body = {
        addedDays: value,
      };
      result = await VacationService.addVacation(selectUserId, body);
    } else if (value === VACATION.MINUS_HALF) {
      const body = {
        usedDays: -value,
        reason: '',
      };
      result = await VacationService.useVacation(selectUserId, body);
    }
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