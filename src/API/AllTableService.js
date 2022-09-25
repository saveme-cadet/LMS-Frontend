import { instance } from './api';

const AllTableUrl = path => {
  return `/${path}`;
};

const AllTableService = {
  // 출석 체크인
  // {
  //   "status": "NONE"
  // }
  putAllTableCheckIn: async (userId, attendanceId, body) => {
    const url = AllTableUrl(`attendance/${userId}/${attendanceId}/checkin`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  //  출석 체크아웃
  // {
  //   "status": "NONE"
  // }
  putAllTableCheckOut: async (userId, attendanceId, body) => {
    const url = AllTableUrl(`attendance/${userId}/${attendanceId}/checkout`);
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getTable: async date => {
    const url = AllTableUrl(`day-logs?date=${date}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getAttendance: async date => {
    const url = AllTableUrl(`attendance?date=${date}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default AllTableService;
