import { instance } from './api';

const TodoUrl = path => {
  return `/users/${path}`;
};

const TodoService = {
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
};

export default TodoService;
