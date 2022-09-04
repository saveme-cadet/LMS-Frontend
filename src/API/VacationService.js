import { instance } from './api';

const VacationUrl = (userId, path) => {
  return `/users/${userId}/vacations/${path}`;
};

// 자신의 휴가 사용
/*
{
  "usedDays": int,
  "reason": "string"
}
  */
const VacationService = {
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
  // 휴가 추가
  /* 
  {
  "addedDays": 0  
  }
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
  getUsedVaction: async userId => {
    const url = VacationUrl(userId, `used-vacations`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getRemainingVaction: async userId => {
    const url = VacationUrl(userId, `remaining-vacations`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default VacationService;
