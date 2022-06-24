import { instance } from './api';

const AojiUrl = path => {
  return `/aoji/${path}`;
};

const AojiService = {
  putEditAoji: async (userId, body) => {
    const url = AojiUrl(`aojitime/${userId}`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postStartAoji: async userId => {
    const url = AojiUrl(`create/${userId}`);
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putEndAoji: async userId => {
    const url = AojiUrl(`update/${userId}`);
    let response;
    try {
      response = await instance.put(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getOtherAoji: async () => {
    const url = AojiUrl(`studyuser`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getMyAoji: async userId => {
    const url = AojiUrl(`read/${userId}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  editMineTime: async (userId, body) => {
    const url = AojiUrl(`aojitime/${userId}`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getStudyUser: async () => {
    const url = AojiUrl(`studyuser`);
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
