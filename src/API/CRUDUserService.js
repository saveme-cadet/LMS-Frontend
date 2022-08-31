import { instance } from './api';

const CRUDUserAPI = path => {
  return `/${path}`;
};

const CRUDUserService = {
  // 회원가입
  // {
  //   "username": "intraId로 무조건 입력해야함. 이메일인증에 활용. 입력하지 않으면 42 이메일 인증 불가",
  //   "password": "영어 대문자 + 영어 소문자 + 특수문자 + 길이 8~30"
  // }
  postUser: async body => {
    const url = CRUDUserAPI(`users`);
    let response;

    try {
      response = await instance.post(url, body);
    } catch (e) {
      return e.response;
    }
    return response;
  },
  // 로그인
  // 로그인에 한해서만 FormData로 전달해야함.
  postLogin: async body => {
    const url = CRUDUserAPI('auth/login');
    const formData = new FormData();
    for (let k in body) {
      formData.append(k, body[k]);
    }
    let response;

    try {
      response = await instance.post(url, formData);
    } catch (e) {
      return e.response;
    }
    return response;
  },
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
};

export default CRUDUserService;
