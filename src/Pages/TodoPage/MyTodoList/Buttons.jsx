import isToday from 'Utils/isToday';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';

const Buttons = ({ type, date, callback }) => {
  const today = new Date();

  const iconType = type => {
    switch (type) {
      case 'Edit':
        return <EditIcon fontSize="inherit" />;
      case 'Delete':
        return <DeleteForeverIcon fontSize="inherit" />;
      case 'Ok':
        return <CheckCircleIcon fontSize="inherit" />;
      case 'Cancel':
        return <HighlightOffIcon fontSize="inherit" />;
    }
  };

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={!isToday(today, date)}
      onClick={callback}
    >
      {iconType(type)}
    </IconButton>
  );
};

export default Buttons;
