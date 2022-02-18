import { instance } from './api';

const testAPI = path => {
  return `/${path}`;
};

const testAPIService = {
  postUser: async (dst, body) => {
    const url = testAPI(`makeall`);
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
