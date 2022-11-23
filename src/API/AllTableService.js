import { instance } from './api';

const AllTableUrl = path => {
  return `/${path}`;
};

const AllTableService = {
  /**
   * 출석 체크인
   * @param {string} userId - 로그인한 유저ID
   * @param {number} attendanceId - 출석ID
   * @param {{value: string}} body - 출석 상태
   * @returns
   */
  putAllTableCheckIn: async (userId, attendanceId, body) => {
    const url = AllTableUrl(
      `attendance/users/${userId}/${attendanceId}/checkin`,
    );
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 출석 체크아웃
   * @param {string} userId - 로그인한 유저ID
   * @param {number} attendanceId - 출석ID
   * @param {{value: string}} body - 출석 상태
   * @returns
   */
  putAllTableCheckOut: async (userId, attendanceId, body) => {
    const url = AllTableUrl(
      `attendance/users/${userId}/${attendanceId}/checkout`,
    );
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 출석표 전체를 가져오기
   * @param {string($date)} date - 날짜
   * @param {string} isAttend - 참석 여부
   * @returns 해당 날짜의 출석표 정보
   */
  getTable: async (date, isAttend) => {
    const query = isAttend ? `PARTICIPATED` : 'NOT_PARTICIPATED';
    const url = AllTableUrl(`day-logs?date=${date}&attendStatus=${query}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      // alert(e);
    }
    return response;
  },
};

export default AllTableService;
