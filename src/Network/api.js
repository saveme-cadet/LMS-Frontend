import axios from 'axios';

const apiUrl = 'http://15.165.148.236:8080/api';

export const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // 없어도 된다??
});
