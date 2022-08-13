import { instance } from './api';

const UserInfoUrl = path => {
  return `/users/${path}`;
};

const UserInfoService = {
  putAttend: async (id, status) => {
    const url = UserInfoUrl(`${id}/attendstatus`);
    const body = { attendStatus: status };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putTeam: async (id, team) => {
    const url = UserInfoUrl(`${id}/team`);
    const body = { team: team };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putRole: async (id, role) => {
    const url = UserInfoUrl(`${id}/role`);
    const body = { role: role };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getAllUser: async () => {
    const url = UserInfoUrl(`?offset=0&size=100`); // 쿼리 임의 추가
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
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
