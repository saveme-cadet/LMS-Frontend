import { CUSTOM_ERR_CODE } from 'Utils/constants';
import { instance } from './api';

const MineUrl = path => {
  return `/users/${path}`;
};

const MineService = {
  /**
   * 아오지 탄광 시작하기
   * @param {string} userId
   * @returns
   */
  postStartMine: async userId => {
    const url = MineUrl(`${userId}/study_times`);
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
   * @param {string} userId
   * @returns
   */
  putEndMine: async userId => {
    const url = MineUrl(`${userId}/study_times`);
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
   * @param {string} userId
   * @param {number} studyTimeId
   * @returns
   */
  putDeleteMine: async (userId, studyTimeId) => {
    const url = MineUrl(`${userId}/study_times/${studyTimeId}`);
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
 * @param {string} userId
 * @param {number} studyTimeId
 * @param {{beginTime:string, endTime: string}} body
 * @returns
 */
  patchEditMine: async (userId, studyTimeId, body) => {
    const url = MineUrl(`${userId}/study_times/${studyTimeId}`);
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
   * @param {string} userId
   * @param {string} date - yyyy-mm-dd 형태로 전달
   * @returns
   */
  getFindMine: async (userId, date) => {
    const url = MineUrl(`${userId}/study_times/${date}`);
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
   * @param {string} userId
   * @returns
   */
  getTodayMine: async userId => {
    const url = MineUrl(`${userId}/study_times/today`);
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
   * @param {string} userId
   * @returns
   */
  getOtherMine: async userId => {
    const url = MineUrl(`${userId}/study_times/studying-user`);
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
