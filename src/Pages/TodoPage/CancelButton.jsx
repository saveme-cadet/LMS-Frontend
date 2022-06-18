import { format } from 'date-fns';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';

const CancelButton = ({ date, setIsEdit }) => {
  const today = new Date();

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
    >
      <HighlightOffIcon
        fontSize="inherit"
        onClick={() => {
          setIsEdit();
        }}
      />
    </IconButton>
  );
};

export default CancelButton;
