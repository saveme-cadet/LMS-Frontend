import { instance } from './api';

const UserInfoUrl = path => {
  return `/users${path}`;
};

const UserInfoService = {
  /**
   * 모든 유저 가져오기
   * @param {number} offset - 페이지네이션 offset
   * @param {number} size - 페이지네이션 size
   * @returns
   */
  getAllUser: async (offset, size) => {
    const url = UserInfoUrl(`?offset=${offset}&size=${size}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      // alert(e);
    }
    return response;
  },
  /**
   * 팀 변경
   * @param {string} userId - 변경할 대상 유저ID
   * @param {{team : string }} body - RED, BLUE, NONE
   * @returns
   */
  patchTeam: async (userId, body) => {
    const url = UserInfoUrl(`/${userId}/team`);
    let response;

    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 역할 변경
   * @param {string} userId - 변경할 대상 유저ID
   * @param {{role : string}} body - ROLE_UNAUTHORIZED, ROLE_USER, ROLE_MANAGER, ROLE_ADMIN
   * @returns
   */
  patchRole: async (userId, body) => {
    const url = UserInfoUrl(`/${userId}/role`);
    let response;

    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 참여 유무 변경
   * @param {string} userId - 변경할 대상 유저ID
   * @param {{attendStatus : string}} body - PARTICIPATED, NOT_PARTICIPATED
   * @returns
   */
  patchAttend: async (userId, body) => {
    const url = UserInfoUrl(`/${userId}/attendStatus`);
    let response;

    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
