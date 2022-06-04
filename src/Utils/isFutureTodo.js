const isFutureTodo = day => {

  if (new Date().getTime() < day.getTime()) return -1;
  else return 0;
};

export default isFutureTodo;
