import { CUSTOM_ERR_CODE } from 'Utils/constants';
import { instance } from './api';

const MineUrl = path => {
  return `/users/${path}`;
};

const MineService = {
  /**
   * 아오지 탄광 시작하기
   * @param {string} username
   * @returns
   */
  postStartMine: async username => {
    const url = MineUrl(`${username}/study_times`);
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 아오지 탄광 종료하기
   * @param {string} username
   * @returns
   */
  putEndMine: async username => {
    const url = MineUrl(`${username}/study_times`);
    let response;
    try {
      response = await instance.put(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 특정 아오지 로그 삭제
   * @param {string} username
   * @param {number} studyTimeId
   * @returns
   */
  putDeleteMine: async (username, studyTimeId) => {
    const url = MineUrl(`${username}/study_times/${studyTimeId}`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  /**
   * 특정 아오지 로그 수정
   * @param {string} username
   * @param {number} studyTimeId
   * @param {{beginTime:string, endTime: string}} body
   * @returns
   */
  patchEditMine: async (username, studyTimeId, body) => {
    const url = MineUrl(`${username}/study_times/${studyTimeId}`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      if (CUSTOM_ERR_CODE[e.response.data.code]) alert(e.response.data.message);
      else alert(e);
    }
    return response;
  },
  /**
   * 특정 날의 아오지 기록 조회
   * @param {string} username
   * @param {string} date - yyyy-mm-dd 형태로 전달
   * @returns
   */
  getFindMine: async (username, date) => {
    const url = MineUrl(`${username}/study_times/${date}`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 오늘 아오지 탄광 로그 조회
   * @param {string} username
   * @returns
   */
  getTodayMine: async username => {
    const url = MineUrl(`${username}/study_times/today`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 현재 공부 중인(아오지 탄광 이용중인) 구해줘 카뎃 멤버 조회
   * @param {string} username
   * @returns
   */
  getOtherMine: async username => {
    const url = MineUrl(`${username}/study_times/studying-user`);
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
