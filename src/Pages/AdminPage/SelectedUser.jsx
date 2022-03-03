import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const SelectedUser = ({
  userInfo,
  onClickChangeAttend,
  onClickChangeTeam,
  onClickChangeRole,
  onClickChangeVacation,
  onClickDeleteUser,
}) => {
  console.log(userInfo);
  return (
    <>
      <h1>
        현재 선택 : {userInfo.userName}
        <Chip
          label={userInfo.attendeStatus}
          className={userInfo.attendeStatus}
        />
        {userInfo.attendeStatus === '참가' && (
          <>
            <Chip label={userInfo.team} className={userInfo.team} />
            <Chip label={userInfo.role} className={userInfo.role} />
          </>
        )}
      </h1>
      {userInfo.attendeStatus === '참가' ? (
        <>
          <Button variant="contained" onClick={() => onClickChangeAttend(0)}>
            참가 상태 변경(불참)
          </Button>
          <Button variant="contained" onClick={() => onClickChangeTeam('red')}>
            팀 변경(레드)
          </Button>
          <Button variant="contained" onClick={() => onClickChangeTeam('blue')}>
            팀 변경(블루)
          </Button>
          <Button variant="contained" onClick={() => onClickChangeRole('머슴')}>
            역할 변경(머슴)
          </Button>
          <Button variant="contained" onClick={() => onClickChangeRole('일반')}>
            역할 변경(유저)
          </Button>
          <Button variant="contained" onClick={() => onClickChangeVacation(1)}>
            휴가 + 0.5
          </Button>
          <Button variant="contained" onClick={() => onClickChangeVacation(-1)}>
            휴가 - 0.5
          </Button>
          <Button onClick={onClickDeleteUser}>유저 삭제</Button>{' '}
        </>
      ) : (
        <>
          <>
            <Button variant="contained" onClick={() => onClickChangeAttend(1)}>
              참가 상태 변경(참가)
            </Button>
            <Button onClick={onClickDeleteUser}>유저 삭제</Button>{' '}
          </>
        </>
      )}
    </>
  );
};

export default SelectedUser;
