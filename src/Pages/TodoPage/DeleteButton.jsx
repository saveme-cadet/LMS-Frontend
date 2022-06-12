import { format } from 'date-fns';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

const DeleteButton = ({ today, date, removeToDo }) => {
  return (
    <IconButton
      aria-label="delete"
      size="small"
      onClick={removeToDo}
      disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
    >
      <DeleteForeverIcon />
    </IconButton>
  );
};

export default DeleteButton;
