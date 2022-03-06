import { instance } from './api';

const UserInfoUrl = path => {
  return `/userinfo/${path}`;
};

const UserInfoService = {
  // putModifyWeek: async (id, body) => {
  //   const url = UserInfoUrl(`modifyweek?userId=${id}`);
  //   let response;

  //   try {
  //     response = await instance.put(url, body);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
  // putModifyMonth: async (id, body) => {
  //   const url = UserInfoUrl(`modifymonth?userId=${id}`);
  //   let response;

  //   try {
  //     response = await instance.put(url, body);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
  // putModifyAll: async (id, body) => {
  //   const url = UserInfoUrl(`modifyall?userId=${id}`);
  //   let response;

  //   try {
  //     response = await instance.put(url, body);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
  putModifyAttend: async (id, status) => {
    const url = UserInfoUrl(`modifyattendstatus`);
    const body = { userId: id + 1, attendStatus: status };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putModifyTeam: async (id, team) => {
    const url = UserInfoUrl(`modifyteam`);
    const body = { userId: id + 1, team: team };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putModifyRole: async (id, role) => {
    const url = UserInfoUrl(`modifyrole`);
    const body = { userid: id + 1, role: role };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putModifyVacationPlus: async id => {
    const url = UserInfoUrl(`modifyvacationplus`);
    const body = { userId: id + 1 };
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putModifyVacationMinus: async id => {
    const url = UserInfoUrl(`modifyvacationminus`);
    const body = { userId: id + 1 };
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postUserInfo: async (id, body) => {
    const url = UserInfoUrl(`info?userId=${id}`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getAllUserInfo: async id => {
    const url = UserInfoUrl(`allinfo?userId=${id}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getAllUser: async id => {
    const url = UserInfoUrl(`all?userId=${id}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getMonthUserInfo: async id => {
    const url = UserInfoUrl(`monthinfo?userId=${id}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getWeekUserInfo: async id => {
    const url = UserInfoUrl(`weekinfo?userId=${id}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  deleteUserInfo: async id => {
    const url = UserInfoUrl(`delete?userId=${id}`);
    let response;
    try {
      response = await instance.delete(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
