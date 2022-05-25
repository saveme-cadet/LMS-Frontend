const isFutureTodo = day => {

  if (new Date().getTime() < day.getTime()) return -1;
  else return 0;
};

export default isFutureTodo;

// true or false로 관리
// NotValidTodoPage.jsx, WrongDay.jsx를 쓰는 페이지 모두 공통 적용