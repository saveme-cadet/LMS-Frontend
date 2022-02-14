import { instance } from './api';

const UserInfoUrl = path => {
  return `/userinfo/${path}`;
};

const UserInfoService = {
  getUserInfo: async (id, date) => {
    const url = UserInfoUrl(`day?userId=${id}&date=${date}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postUserInfo: async () => {
    const url = UserInfoUrl(`info?userId=1`);
    console.log(url);
    //  console.log(data);
    let response;

    try {
      response = await instance.post(url, {
        userInfoId: null,
        nickName: null,
        level: 0,
        nowSubject: null,
        confidenceSubject: 'ㄴㅁㅇㅁㅎㅇㄴㅎ',
        userInfoDay: '2022-02-16', // type = Date, 정해진 포맷으로 보내야함
      });
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default UserInfoService;
