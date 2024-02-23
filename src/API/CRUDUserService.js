import { instance } from './api';
import {
  TEAM_ID,
  PARTICIPATE_NAME,
  TEAM_NAME,
  ROLE_NAME,
} from 'Utils/constants';

const CRUDUserAPI = path => {
  return `/${path}`;
};

import { doc, setDoc, getDoc, collection } from 'firebase/firestore/lite';
import db from '../firebase';

const CRUDUserService = {
  /**
   * 회원가입
   * @param {{username: string, password: string}} body - username은 42 intra id
   * @returns
   */
  postUser: async body => {
    let response;

    try {
      const userRef = doc(db, 'user', body.username);
      const data = {
        username: body.username,
        password: body.password,
        attendance: PARTICIPATE_NAME.PARTICIPATED,
        role: ROLE_NAME.ROLE_MANAGER,
        team_id: TEAM_ID.ALL,
        team: TEAM_NAME.NONE,
        vacation: 0,
        absentScore: 0,
      };
      response = await setDoc(userRef, data, { merge: true });
    } catch (e) {
      return -1;
    }
    return 0;
  },
  /**
   * 로그인
   * @param {{username: string, password: string}} body - username은 42 intra id
   * @returns
   */
  postLogin: async body => {
    let response;
    let data;
    try {
      let userRef;
      userRef = doc(db, 'user', body.username);

      response = await getDoc(userRef);

      data = response.data();
      if (data.password === body.password) return data;
    } catch (e) {
      return null;
    }
  },
  /**
   * 로그아웃
   * @returns
   */
  postLogout: async () => {
    const url = CRUDUserAPI('auth/logout');
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 임시 비밀번호 발급
   * @param {string} userName - 로그인한 유저 ID
   * @returns
   */
  issueTempPassword: async userName => {
    const url = CRUDUserAPI('auth/password-inquery');
    let response;
    try {
      response = await instance.post(url, { username: userName });
    } catch (e) {
      // alert(e);
    }
    return response;
  },
  /**
   * 비밀번호 변경
   * @param {string} oldPassword
   * @param {string} newPassword
   * @param {string} checkPassword
   * @returns
   */
  updatePassword: async (oldPassword, newPassword, checkPassword) => {
    const url = CRUDUserAPI('auth/password');
    let response;
    try {
      response = await instance.patch(url, {
        oldPassword,
        password: newPassword,
        checkPassword,
      });
    } catch (e) {
      return null;
    }
    return response;
  },
};

export default CRUDUserService;
