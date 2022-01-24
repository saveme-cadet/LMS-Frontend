import axios from 'axios';
const apiUrl = "http://42save-be.ap-northeast-2.elasticbeanstalk.com";

const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // 없어도 된다??

});

export const testAPI = async () => {
  return await instance.get(`/`);

};


export const testAttendence = async () => {
  return await instance.get(`/attendence`);
};
