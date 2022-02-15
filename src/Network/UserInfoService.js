import { instance } from './api';

const UserInfoUrl = path => {
  return `/userinfo/${path}`;
};

const UserInfoService = {
  getUserInfo: async (authUser, date) => {
    const url = UserInfoUrl(`day?userId=${authUser}&date=${date}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postUserInfo: async (authUser, body) => {
    const url = UserInfoUrl(`info?userId=${authUser}`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putUserInfo: async (authUser, body) => {
    const url = UserInfoUrl(`info?userId=${authUser}`);
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  deleteUserInfo: async (authUser, body) => {
    const url = UserInfoUrl(`info?userId=${authUser}`);
    let response;

    try {
      response = await instance.delete(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
