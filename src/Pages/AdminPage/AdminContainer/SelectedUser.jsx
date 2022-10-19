import { useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ROLE_NAME, PARTICIPATE_NAME, VACATION } from 'Utils/constants';
import { handleBreakpoints } from '@mui/system';

const SelectedUser = ({
  userInfo,
  onClickChangeAttend,
  onClickChangeTeam,
  onClickChangeRole,
  onClickChangeVacation,
}) => {
  const [vacation, setVacation] = useState(userInfo.vacation);

  const onClickCustomVacation = () => {
    onClickChangeVacation(vacation);
    setVacation(0);
  };
  return (
    <div className="box">
      <span className="title">현재 선택 : {userInfo.username}</span>

      <span className="user-status">
        <Chip
          label={PARTICIPATE_NAME[userInfo.attendStatus]}
          className={userInfo.attendStatus}
        />
        {userInfo.attendStatus === 'PARTICIPATED' && (
          <>
            <Chip label={userInfo.team} className={userInfo.team} />
            <Chip label={ROLE_NAME[userInfo.role]} className={userInfo.role} />
          </>
        )}
      </span>

      <div className="action">
        <Select
          value={userInfo.attendStatus}
          onChange={onClickChangeAttend}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'PARTICIPATED'}>참가</MenuItem>
          <MenuItem value={'NOT_PARTICIPATED'}>불참</MenuItem>
        </Select>

        {userInfo.attendStatus === 'PARTICIPATED' && (
          <>
            <Select
              value={userInfo.team}
              onChange={onClickChangeTeam}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'RED'}>RED</MenuItem>
              <MenuItem value={'BLUE'}>BLUE</MenuItem>
            </Select>
            <Select
              value={userInfo.role}
              onChange={onClickChangeRole}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={'ROLE_MANAGER'}>머슴</MenuItem>
              <MenuItem value={'ROLE_USER'}>일반</MenuItem>
              <MenuItem value={'ROLE_UNAUTHORIZED'}>게스트</MenuItem>
            </Select>

            <Button
              variant="contained"
              onClick={() => onClickChangeVacation(VACATION.PLUS_HALF)}
            >
              휴가 + 0.5
            </Button>
            <Button
              variant="contained"
              onClick={() => onClickChangeVacation(VACATION.MINUS_HALF)}
            >
              휴가 - 0.5
            </Button>

            <input
              type="number"
              value={vacation}
              onChange={e => setVacation(e.target.value)}
            />
            <Button variant="contained" onClick={onClickCustomVacation}>
              휴가 임의 증감
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedUser;
