import { format } from 'date-fns';

import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';

const OkButton = ({ date, index, setIsEdit, setToDos, getTodos }) => {
  const today = new Date();

  const editTitle = event => {
    // toDos[index].title = event.target.parentElement.previousSibling.value;
    // setToDos(
    //   toDos.map((item, idx) => {
    //     console.log(item);
    //     // index === idx
    //     //   ? (item.title = event.target.parentElement.previousSibling.value)
    //     //   : '';
    //   }),
    // );

    const toDos = getTodos();

    toDos.map((item, idx) => {
      if (idx == index) item.title = 1;
    });
    setIsEdit();
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
