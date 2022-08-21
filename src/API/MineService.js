import { instance } from './api';

const MineUrl = path => {
  return `/study_times/${path}`;
};

const MineService = {
  // 전체 날짜 조회
  getAllMine: async () => {
    const url = MineUrl(``);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 공부 시작
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
  // 공부 종료
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
  // index에 해당하는 공부 기록 삭제
  putDeleteMine: async index => {
    const url = MineUrl(`${index}`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // index에 해당하는 공부 기록 수정
  /*
  {
  "beginTime": "string",
  "endTime": "string"
  }
*/
  patchEditMine: async (index, body) => {
    const url = MineUrl(`${index}`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 자신의 특정 날짜 기록 조회
  // date는 yyyy-mm-dd 형태로
  getFindMine: async date => {
    const url = MineUrl(`${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 당일 자신의 공부 기록 조회
  getTodayMine: async () => {
    const url = MineUrl(`today`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 현재 공부 중인 회원 조회
  getOtherMine: async () => {
    const url = MineUrl(`study-user`);
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
