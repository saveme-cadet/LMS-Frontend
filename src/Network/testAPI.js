import { instance } from './api';

const testAPI = path => {
  return `/${path}`;
};

const testAPIService = {
  postUser: async body => {
    const url = testAPI(`usermake/sign-up`);
    let response;

    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default testAPIService;
