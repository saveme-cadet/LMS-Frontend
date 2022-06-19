import { format } from 'date-fns';

const ItemChecked = {
  textDecorationLine: 'line-through',
  color: 'gray',
  cursor: 'default',
  fontSize: 15,
  marginLeft: 10,
  marginRight: 10,
};

const ItemNotChecked = {
  cursor: 'default',
  fontSize: 15,
  marginLeft: 10,
  marginRight: 10,
};

const ItemNotToday = {
  color: 'gray',
  cursor: 'default',
  fontSize: 15,
  marginLeft: 10,
  marginRight: 10,
};

const Item = ({ item, date, index, changeCheck, isCheck }) => {
  const today = new Date();
  let style = isCheck ? ItemChecked : ItemNotChecked;

  if (
    format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd') &&
    style === ItemNotChecked
  )
    style = ItemNotToday;

  return (
    <span id={item.todoId} onClick={() => changeCheck(index)} style={style}>
      {item.title}
    </span>
  );
};

export default Item;
