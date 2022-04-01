import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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
    <div className="box">
      <text className="title">현재 선택 : {userInfo.userName}</text>

      <span className="user-status">
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
      </span>

      <div className="action">
        <Select
          value={userInfo.attendeStatus}
          onChange={onClickChangeAttend}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'참가'}>참가</MenuItem>
          <MenuItem value={'불참'}>불참</MenuItem>
        </Select>

        {userInfo.attendeStatus === '참가' && (
          <>
            <Select
              value={userInfo.team}
              onChange={onClickChangeTeam}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'red'}>RED</MenuItem>
              <MenuItem value={'blue'}>BLUE</MenuItem>
            </Select>
            <Select
              value={userInfo.role}
              onChange={onClickChangeRole}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'머슴'}>머슴</MenuItem>
              <MenuItem value={'카뎃'}>카뎃</MenuItem>
            </Select>
            <Button
              variant="contained"
              onClick={() => onClickChangeVacation(1)}
            >
              휴가 + 0.5
            </Button>
            <Button
              variant="contained"
              onClick={() => onClickChangeVacation(-1)}
            >
              휴가 - 0.5
            </Button>
            {/* <Button
            onClick={() =>
              onClickDeleteUser({
                userName: userInfo.userName,
                userId: userInfo.id,
              })
            }
          >
            유저 삭제
          </Button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedUser;
