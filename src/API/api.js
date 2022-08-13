import axios from 'axios';

const apiUrl = 'https://www.savvemecadet.click/api';

export const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,

  // headers: {
  // 'content-type': 'application/json',
  // 'Content-Type': 'multipart/form-data',
  // 'Content-Type': 'application/x-www-form-urlencoded',
  // },
});
