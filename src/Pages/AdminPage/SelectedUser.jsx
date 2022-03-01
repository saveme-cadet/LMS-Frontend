import Button from '@mui/material/Button';

const SelectedUser = ({ userInfo, onClickChangeAttend, onClickDeleteUser }) => {
  return (
    <>
      <h1>현재 선택 : {userInfo.userName}</h1>
      <Button variant="contained" onClick={onClickChangeAttend}>
        참가 상태 변경
      </Button>
      <Button variant="contained">팀 변경(레드)</Button>
      <Button variant="contained">팀 변경(블루)</Button>

      <Button variant="contained">역할 변경(머슴)</Button>
      <Button variant="contained">역할 변경(유저)</Button>

      <Button variant="contained">휴가 + 0.5</Button>
      <Button variant="contained">휴가 - 0.5</Button>
      <Button onClick={onClickDeleteUser}>유저 삭제</Button>
    </>
  );
};

export default SelectedUser;
