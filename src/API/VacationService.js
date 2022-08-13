import { instance } from './api';

const VacationUrl = path => {
  return `/${path}`;
};

// 자신의 휴가 사용
/*
{
  "usedDays": int,
  "reason": "string"
}
  */
const VacationService = {
  postVacation: async body => {
    const url = VacationUrl(`vacations`);
    let response;
    try {
      response = await instance.patch(url, body);
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
  patchVacation: async (id, body) => {
    const url = VacationUrl(`vacations/${id}`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getUsedVaction: async () => {
    const url = VacationUrl(`used-vacations`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getRemainingVaction: async () => {
    const url = VacationUrl(`remaining-vacations`);
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
