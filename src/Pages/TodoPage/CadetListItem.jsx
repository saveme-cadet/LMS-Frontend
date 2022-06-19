import { format } from 'date-fns';

const ItemChecked = {
  textDecorationLine: 'line-through',
  color: 'gray',
};

const ItemNotChecked = {};

const ItemNotToday = {
  color: 'gray',
};

const CadetListItem = ({ list, date }) => {
  const today = new Date();

  let style = list.titleCheck ? ItemChecked : ItemNotChecked;

  if (
    format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd') &&
    style === ItemNotChecked
  )
    style = ItemNotToday;

  return (
    <span>
      <span style={style}>{list.title}</span>
    </span>
  );
};

export default CadetListItem;
