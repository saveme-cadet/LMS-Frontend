import { instance } from './api';

const MineUrl = path => {
  return `/study_times/${path}`;
  // return `/mine/${path}`;
  // 백엔드 API가 변경되지 않아 일단 aoji로 사용
};

const MineService = {
  putEditMine: async (studyTimeId, body) => {
    const url = MineUrl(`${studyTimeId}`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postStartMine: async () => {
    const url = MineUrl(``);
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putEndMine: async () => {
    const url = MineUrl(``);
    let response;
    try {
      response = await instance.put(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getAllMine: async () => {
    const url = MineUrl(`study-user`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // API 존재하지 않음
  // getMyMine: async userId => {
  //   const url = MineUrl(`read/${userId}`);
  //   let response;
  //   try {
  //     response = await instance.get(url);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
};

export default MineService;
