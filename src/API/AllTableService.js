import { instance } from './api';

import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
} from 'firebase/firestore/lite';
import db from '../firebase';

const AllTableUrl = '';
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
   * @returns 해당 날짜의 출석표 정보
   */
  getTable: async date => {
    let response;
    let data;
    const dayTableRef = doc(db, 'day_table', date);
    response = await getDoc(dayTableRef);
    data = response.data();
    console.log('DTAA :', data);
    return data;
  },

  updateTable: async (date, user) => {
    let response;
    const dayTableRef = doc(db, 'day_table', date);
    const data = { [`${user}`]: true };
    try {
      response = await setDoc(dayTableRef, data, { merge: true });
    } catch (e) {
      return e;
    }
  },
};

export default AllTableService;
