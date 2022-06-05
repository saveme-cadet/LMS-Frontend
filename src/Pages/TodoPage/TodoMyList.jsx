import { format } from 'date-fns';

import styled from 'styled-components';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

const TodoMyList = ({toDos, date, changeCheck, removeToDo}) => {

  const today = new Date();

  const ItemChecked = {
    textDecorationLine: 'line-through',
    color: 'gray',
    cursor: "default",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  }

  const ItemNotChecked = {
    cursor: "default",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
  }

  const Item = (({item, index, changeCheck, isCheck}) => {
    const style = isCheck ? ItemChecked : ItemNotChecked;
    return (
      <span id={item.todoId} onClick={() => changeCheck(index)} style={style}
      >
      {item.title}
    </span>
    );
  });
    
  const DeleteButton = (({today, date, removeToDo}) => {
    return (
      <IconButton
      aria-label="delete"
      size="small"
      onClick={removeToDo}
      disabled={
        format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
      }
    >
      <DeleteForeverIcon />
    </IconButton>
    );
  })

  return (
    <TodoMyListBody>
      {toDos.map((item, index) => (
        <TodoMyListContainer key={index}>
          <Checkbox onClick={() => changeCheck(index)} checked={item.titleCheck}
          disabled={
              format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')
          } size="small"
          />
          <Item item={item} index={index} changeCheck={changeCheck} isCheck={item.titleCheck}/>
          <DeleteButton today={today} date={date} removeToDo={removeToDo}/>
        </TodoMyListContainer>
      ))}
      </TodoMyListBody>
  );
};

const TodoMyListBody = styled.div`
height: 80%;
margin-top: 2%;
padding : 1% 3%;
font-size: 15px;
overflow : auto;
`
const TodoMyListContainer = styled.div`
display: table;
`

export default TodoMyList;
