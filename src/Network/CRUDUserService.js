import { instance } from './api';

const CRUDUserAPI = path => {
  return `/${path}`;
};

const CRUDUserService = {
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
    // console.log(body);
    let response;
    try {
      response = await instance.delete(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postUser: async body => {
    const url = CRUDUserAPI(`sign-up`);
    let response;

    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postLogin: async body => {
    const url = CRUDUserAPI('login');
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      // console.log(e);
      return null;
      // alert(e);
    }
    return response;
  },
  postLogout: async () => {
    const url = CRUDUserAPI('logout');
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
