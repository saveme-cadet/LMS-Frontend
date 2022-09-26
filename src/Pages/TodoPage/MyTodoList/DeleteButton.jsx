import isToday from 'Utils/isToday';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

const DeleteButton = ({ date, removeToDo }) => {
  const today = new Date();

  return (
    <IconButton
      aria-label="delete"
      size="small"
      onClick={removeToDo}
      disabled={!isToday(today, date)}
    >
      <DeleteForeverIcon fontSize="inherit" />
    </IconButton>
  );
};

export default DeleteButton;
