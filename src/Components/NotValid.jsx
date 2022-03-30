import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
const NotValid = ({ code }) => {
  const getMessage = code => {
    if (code === 0) return '접근 권한이 없는 페이지 입니다.';
    else if (code === -1) return '아직 진행하지 않은 날짜입니다!';
    else if (code === 2)
      return '오늘은 주말입니다! 추가 공부를 하신다면 아오지로!';
  };
  return (
    <div className="warning">
      <WarningAmberRoundedIcon sx={{ fontSize: 700 }} />
      <h2>{getMessage(code)}</h2>
    </div>
  );
};

export default NotValid;
