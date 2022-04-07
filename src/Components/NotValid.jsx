import { getMessage } from 'Utils';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const NotValid = ({ code }) => {
  return (
    <div className="warning">
      <WarningAmberRoundedIcon sx={{ fontSize: 500 }} />
      <h2>{getMessage(code)}</h2>
    </div>
  );
};

export default NotValid;
