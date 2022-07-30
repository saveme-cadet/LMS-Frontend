import { instance } from './api';

const CRUDUserAPI = path => {
  return `/${path}`;
};

const CRUDUserService = {
  // deleteUser: async body => {
  //   // 미사용
  //   const url = CRUDUserAPI(`user/delete`);
  //   let response;
  //   try {
  //     response = await instance.delete(url, body);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
  postUser: async body => {
    const url = CRUDUserAPI(`users`);
    let response;

    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postLogin: async body => {
    const url = CRUDUserAPI('auth/login');
    // const formData = new FormData();
    // formData.set('username', body.username);
    // formData.set('password', body.password);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postLogout: async () => {
    const url = CRUDUserAPI('auth/logout');
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
