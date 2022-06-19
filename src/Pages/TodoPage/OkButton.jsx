import { format } from 'date-fns';
import { TodoService } from 'API';

import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';

const OkButton = ({ date, index, setIsEdit, toDos, userId, getToDos }) => {
  const today = new Date();

  const editTitle = async event => {
    const newTitle = event.target.closest('form')[1].value;

    toDos[index].title = newTitle;

    const result = await TodoService.putTodo(toDos[index]);
    setIsEdit();
    getToDos(userId);
  };

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
    >
      <CheckIcon fontSize="inherit" onClick={editTitle} />
    </IconButton>
  );
};

export default OkButton;
