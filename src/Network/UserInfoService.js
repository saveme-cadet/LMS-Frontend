import { instance } from './api';

const UserInfoUrl = path => {
  return `/userinfo/${path}`;
};

const UserInfoService = {
  putModifyWeek: async (dst, body) => {
    const url = UserInfoUrl(`modifyweek?userId=${dst}`);
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putModifyMonth: async (dst, body) => {
    const url = UserInfoUrl(`modifymonth?userId=${dst}`);
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putModifyAll: async (dst, body) => {
    const url = UserInfoUrl(`modifyall?userId=${dst}`);
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postUserInfo: async (dst, body) => {
    const url = UserInfoUrl(`info?userId=${dst}`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getAllUserInfo: async dst => {
    const url = UserInfoUrl(`allinfo?userId=${dst}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getAllUser: async dst => {
    const url = UserInfoUrl(`all?userId=${dst}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getMonthUserInfo: async dst => {
    const url = UserInfoUrl(`monthinfo?userId=${dst}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getWeekUserInfo: async dst => {
    const url = UserInfoUrl(`weekinfo?userId=${dst}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  deleteUserInfo: async dst => {
    const url = UserInfoUrl(`delete?userId=${dst}`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
