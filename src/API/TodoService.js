import { instance } from './api';

const TodoUrl = path => {
  return `/todo/${path}`;
};

const TodoService = {
  putTodo: async body => {
    const url = TodoUrl(`todo`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postTodo: async body => {
    const url = TodoUrl(`usertodo`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getTodo: async (userId, date) => {
    const url = TodoUrl(`day/${userId}?date=${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getOthers: async date => {
    const url = TodoUrl(`day/?date=${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // deleteTodo: async body => {
  //   const url = TodoUrl(`delete`);
  //   // console.log(body);
  //   let response;
  //   try {
  //     response = await instance.delete(url, body);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
  deleteTodo: async (userId, todoId, date) => {
    const url = TodoUrl(`delete/${userId}/${todoId}?date=${date}`);
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
