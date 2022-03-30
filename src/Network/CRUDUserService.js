import { instance } from './api';

const CRUDUserAPI = path => {
  return `/${path}`;
};

const CRUDUserService = {
  postUser: async body => {
    const url = CRUDUserAPI(`usermake/sign-up`);
    let response;

    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getUser: async () => {
    const url = CRUDUserAPI(`user/alluser`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  deleteUser: async body => {
    const url = CRUDUserAPI(`user/delete`);
    console.log(body);
    let response;
    try {
      response = await instance.delete(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  login: async body => {
    const url = '/login';
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  logout: async () => {
    const url = '/logout';
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default CRUDUserService;
