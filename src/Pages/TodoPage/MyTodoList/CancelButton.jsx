import isToday from 'Utils/isToday';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';

const CancelButton = ({ date, setIsEdit }) => {
  const today = new Date();

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={!isToday(today, date)}
      onClick={() => {
        setIsEdit('');
      }}
    >
      <HighlightOffIcon fontSize="inherit" />
    </IconButton>
  );
};

export default CancelButton;
