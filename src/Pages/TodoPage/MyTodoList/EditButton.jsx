import isToday from 'Utils/isToday';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const EditButton = ({ date, index, setIsEdit }) => {
  const today = new Date();

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={!isToday(today, date)}
      onClick={() => {
        setIsEdit(index);
      }}
    >
      <EditIcon fontSize="inherit" />
    </IconButton>
  );
};

export default EditButton;
