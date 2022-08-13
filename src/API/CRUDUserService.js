import { instance, loginInstance } from './api';

const CRUDUserAPI = path => {
  return `/${path}`;
};

const CRUDUserService = {
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
    const formData = new FormData();
    for (let k in body) {
      formData.append(k, body[k]);
    }
    let response;

    try {
      response = await instance.post(url, formData);
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
