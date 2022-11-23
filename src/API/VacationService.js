import { instance } from './api';

const VacationUrl = (userId, path) => {
  return `/users/${userId}/vacations/${path}`;
};

const VacationService = {
  /**
   * 휴가 사용
   * @param {string} userId - 변경할 대상 유저ID
   * @param {{ usedDays: number, reason: string}} body - 차감일수
   * @returns
   */
  useVacation: async (userId, body) => {
    const url = VacationUrl(userId, `used-days`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  /**
   * 휴가 증가
   * @param {string} userId - 변경할 대상 유저ID
   * @param {{ addedDays: number, reason: string}} body - 증가일수
   * @returns
   */
  addVacation: async (userId, body) => {
    const url = VacationUrl(userId, `added-days`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default VacationService;
