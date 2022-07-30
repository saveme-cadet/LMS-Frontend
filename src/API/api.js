import axios from 'axios';

const apiUrl = 'http://www.savvemecadet.click/api';

export const instance = axios.create({
  baseURL: apiUrl,
  // 'Content-Type': 'multipart/form-data',
});
