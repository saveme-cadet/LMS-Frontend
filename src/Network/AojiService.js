import { instance } from './api';

const AojiUrl = path => {
  return `/aoji/${path}`;
};

const AojiService = {
  endAoji: async (userId) => {
    const url = AojiUrl(`update/${userId}`);
    let response;
    try {
      response = await instance.put(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putAoji: async (userId, body) => {
    const url = AojiUrl(`aojitime/${userId}`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postAoji: async (userId) => {
    const url = AojiUrl(`create/${userId}`);
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getMyAoji: async () => {
    const url = AojiUrl(`studyuser`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getOtherAoji : async(userId) => {
    const url = AojiUrl(`read/${userId}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default AojiService;
