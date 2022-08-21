import { instance } from './api';

const AllTableUrl = path => {
  return `/${path}`;
};

const AllTableService = {
  // 출석 체크인
  // {
  //   "status": "NONE"
  // }
  putAllTableCheckIn: async (attendanceId, body) => {
    const url = AllTableUrl(`attendance/${attendanceId}/checkin`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  //  출석 체크아웃
  // {
  //   "status": "NONE"
  // }
  putAllTableCheckOut: async (attendanceId, body) => {
    const url = AllTableUrl(`attendance/${attendanceId}/checkout`);
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  // API 없음
  // getAllTable: async (date, userId) => {
  //   const url = AllTableUrl(`day?date=${date}&userId=${userId}`);
  //   let response;

  //   try {
  //     response = await instance.get(url);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
};

export default AllTableService;
