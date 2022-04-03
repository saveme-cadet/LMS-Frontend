import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
const NotValidTodoPage = ({ code }) => {
  const getMessage = code => {
    if (code === 0) return '접근 권한이 없는 페이지 입니다.';
    else if (code === -1) return '아직 진행하지 않은 날짜입니다!';
  };
  return (
    <div className="warning">
      <WarningAmberRoundedIcon sx={{ fontSize: 500 }} />
      <h2>{getMessage(code)}</h2>
    </div>
  );
};

export default NotValidTodoPage;
