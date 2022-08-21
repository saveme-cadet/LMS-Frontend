import { instance } from './api';

const TodoUrl = path => {
  return `/users/${path}`;
};

const TodoService = {
  // 자신의 할일 가져오기
  // date=2022-02-11
  getTodo: async (userId, date) => {
    const url = TodoUrl(`${userId}/todos?date=${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 자신의 할일 추가
  // {
  //   "title": "공부하기",
  //   "todoDay": "2022-08-13"
  // }
  postTodo: async (userId, body) => {
    const url = TodoUrl(`${userId}/todos`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 할일 제거
  deleteTodo: async (userId, todoId) => {
    const url = TodoUrl(`${userId}/todos/${todoId}`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  // 할일 수정
  // {
  //   "title": "공부하기",
  //   "titleCheck": false
  // }
  patchTodo: async (todoId, userId, body) => {
    const url = TodoUrl(`${userId}/todos/${todoId}`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 오늘에 해당하는 다른 사람들의 할일 가져오기
  // date=2022-02-11
  getOthers: async date => {
    const url = TodoUrl(`todos?date=${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getOthersProgress: async date => {
    const url = TodoUrl(`todos/progress/${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default TodoService;
