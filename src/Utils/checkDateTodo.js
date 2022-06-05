const checkDateTodo = day => {
  if (
    new Date().getTime() < day.getTime() ||
    new Date('2022-04-03').getTime() > day.getTime()
  )
    return -1;
  else return 0;
};

export default checkDateTodo;
