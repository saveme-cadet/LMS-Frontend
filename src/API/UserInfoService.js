import { instance } from './api';

const UserInfoUrl = path => {
  return `/users/${path}`;
};

const UserInfoService = {
  // 모든 유저 가져오기
  getAllUser: async (offset, size) => {
    const url = UserInfoUrl(`?offset=${offset}&size=${size}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 팀 변경
  // {
  //   "team": "RED, BLUE, NONE",
  //   "reason": "team 변경사유 입력"
  // }
  patchTeam: async (userId, body) => {
    const url = UserInfoUrl(`${userId}/team`);
    let response;

    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  patchRole: async (userId, body) => {
    const url = UserInfoUrl(`${userId}/role`);
    let response;

    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 참여 유무 변경
  // {
  //   "attendStatus": "PARTICIPATED, NOT_PARTICIPATED"
  // }
  patchAttend: async (userId, body) => {
    const url = UserInfoUrl(`${userId}/attendStatus`);
    let response;

    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  // 이번 달 참여 중인 사용자 얻기
  getParticipateUser: async () => {
    const url = UserInfoUrl(`participating-this-month`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
