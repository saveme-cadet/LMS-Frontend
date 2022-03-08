import { instance } from './api';

const TodoUrl = path => {
  return `/todo/${path}`;
};

const TodoService = {
  putTodo: async (userId, body) => {
    const url = TodoUrl(`todo?userId=${userId}`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postTodo: async (userId, body) => {
    const url = TodoUrl(`usertodo?userId=${userId}`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getTodo: async (userId, date) => {
    const url = TodoUrl(`day?userId=${userId}&date=${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  deleteTodo: async () => {
    const url = TodoUrl(`delete`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default TodoService;
