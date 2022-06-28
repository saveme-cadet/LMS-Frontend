import { format } from 'date-fns';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const EditButton = ({ date, index, setIsEdit }) => {
  const today = new Date();

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
      onClick={() => {
        setIsEdit(index);
      }}
    >
      <EditIcon fontSize="inherit" />
    </IconButton>
  );
};

export default EditButton;