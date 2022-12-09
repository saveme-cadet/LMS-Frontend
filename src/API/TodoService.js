import { instance } from './api';

const TodoUrl = path => {
  return `/users/${path}`;
};

const TodoService = {
  /**
   * 자신의 할일 가져오기
   * @param {string} userId - 로그인한(자신의) 유저ID
   * @param {string} date - 날짜
   * @returns
   */
  getTodo: async (userId, date) => {
    const url = TodoUrl(`${userId}/todos?date=${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response.data.content;
  },
  /**
   * 자신의 할일 추가
   * @param {string} userId - 로그인한(자신의) 유저ID
   * @param {{ title: string, todoDay : string }} body - 할일
   * @returns
   */
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
  /**
   * 할일 제거
   * @param {string} userId - 로그인한(자신의) 유저ID
   * @param {number} todoId - 삭제할 할일의 인덱스
   * @returns
   */
  deleteTodo: async (userId, todoId) => {
    const url = TodoUrl(`${userId}/todos/${todoId}`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert('이미 삭제되었습니다.');
    }
    return response;
  },

  /**
   * 할일 수정
   * @param {string} userId - 로그인한(자신의) 유저ID
   * @param {number} todoId - 수정할 할일의 인덱스
   * @param {{title: string, titleCheck: boolean}} body - 할일 내용
   * @returns
   */
  patchTodo: async (userId, todoId, body) => {
    const url = TodoUrl(`${userId}/todos/${todoId}`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  /**
   * 오늘에 해당하는 다른 사람들의 할일 가져오기
   * @param {string} date - 조사할 날짜
   * @returns
   */
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
