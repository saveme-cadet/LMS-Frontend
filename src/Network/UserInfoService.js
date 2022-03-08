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
  putAttend: async (id, status) => {
    const url = UserInfoUrl(`attendstatus`);
    const body = { userId: id, attendStatus: status };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putTeam: async (id, team) => {
    const url = UserInfoUrl(`team`);
    const body = { userId: id, team: team };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putRole: async (id, role) => {
    const url = UserInfoUrl(`role`);
    const body = { userId: id, role: role };
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putVacationPlus: async id => {
    const url = UserInfoUrl(`vacationplus`);
    const body = { userId: id };
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putVacationMinus: async id => {
    const url = UserInfoUrl(`vacationminus`);
    const body = { userId: id };
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
  // getMonthUserInfo: async id => {
  //   const url = UserInfoUrl(`monthinfo?userId=${id}`);
  //   let response;

  //   try {
  //     response = await instance.get(url);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
  // getWeekUserInfo: async id => {
  //   const url = UserInfoUrl(`weekinfo?userId=${id}`);
  //   let response;

  //   try {
  //     response = await instance.get(url);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },

  // deleteUserInfo: async id => {
  //   const url = UserInfoUrl(`delete?userId=${id}`);
  //   let response;
  //   try {
  //     response = await instance.delete(url);
  //   } catch (e) {
  //     alert(e);
  //   }
  //   return response;
  // },
};

export default UserInfoService;
