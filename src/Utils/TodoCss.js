import isToday from 'Utils/isToday';

const color = (props, checked) => {
  if (!isToday(props.today, props.date) || checked) return 'gray';
  else return '';
};

const lineThrough = checked => {
  if (checked) return 'line-through';
  else return '';
};

export { color, lineThrough };
