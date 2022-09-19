import { format } from 'date-fns';
import { TodoService } from 'API';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';

const OkButton = ({ date, index, setIsEdit, toDos, userId, getToDos }) => {
  const today = new Date();

  const editTitle = async event => {
    const newTitle = event.target.closest('form')[1].value;

    if (newTitle === '') return;

    const result = await TodoService.patchTodo(userId, toDos[index].todoId, {
      title: newTitle,
      titleCheck: toDos[index].titleCheck,
    });
    setIsEdit();
    getToDos(userId);
  };

  return (
    <IconButton
      aria-label="edit"
      size="small"
      disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
      onClick={editTitle}
    >
      <CheckCircleIcon fontSize="inherit" />
    </IconButton>
  );
};

export default OkButton;
