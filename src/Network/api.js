import axios from 'axios';

const apiUrl = 'http://3.38.226.166:8080/api';

const OAuthUrl = 'https://kauth.kakao.com/oauth';
export const instance = axios.create({
  baseURL: apiUrl,
  // withCredentials: true, // 백에서 CORS를 전부 열어두었기 때문에 없어도 된다
});

export const kakaoInstance = axios.create({
  baseURL: OAuthUrl,
  // withCredentials: true, // 백에서 CORS를 전부 열어두었기 때문에 없어도 된다
});
