const validDayTodoPage = day => {
  const today = new Date();

  // return (0);
  const selcetDayNum = day.getDay();
  if (day.getTime() > today.getTime()) return -1;
  else return 0;
};

export default validDayTodoPage;
