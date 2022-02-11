import { instance } from './api';

const UserInfoUrl = path => {
  return `/userinfo/${path}`;
};

const UserInfoService = {
  getUserInfo: async (id, date) => {
    const url = UserInfoUrl(`day?id=${id}&date=${date}`);
    console.log(url);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postUserInfo: async data => {
    const url = UserInfoUrl(`info`);
    console.log(url);
    console.log(data);
    let response;

    try {
      response = await instance.post(url, {
        userInfoDto: {
          userInfoId: 0,
          nickName: 'sjin',
          level: 0,
          nowSubject: 'libft',
          confidenceSubject: 'libft',
          userInfoDay: '2022-02-11',
        },
        authUser: {
          id: 1,
        },
      });
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
