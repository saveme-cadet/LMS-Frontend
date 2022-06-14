import { instance } from './api';

const MineUrl = path => {
  return `/aoji/${path}`;
  // return `/mine/${path}`;
  // 백엔드 API가 변경되지 않아 일단 aoji로 사용
};

const MineService = {
  putEditMine: async (userId, body) => {
    const url = MineUrl(`minetime/${userId}`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postStartMine: async userId => {
    const url = MineUrl(`create/${userId}`);
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putEndMine: async userId => {
    const url = MineUrl(`update/${userId}`);
    let response;
    try {
      response = await instance.put(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getOtherMine: async () => {
    const url = MineUrl(`studyuser`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getMyMine: async userId => {
    const url = MineUrl(`read/${userId}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default MineService;
