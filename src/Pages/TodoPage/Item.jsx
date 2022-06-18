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

const Item = ({ item, index, changeCheck, isCheck }) => {
  const style = isCheck ? ItemChecked : ItemNotChecked;

  return (
    <span id={item.todoId} onClick={() => changeCheck(index)} style={style}>
      {item.title}
    </span>
  );
};

export default Item;
