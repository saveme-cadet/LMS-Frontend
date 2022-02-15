import { instance } from './api';

const AllTableUrl = path => {
  return `/alltable/${path}`;
};

const AllTableService = {
  getAllTable: async (authUser, date) => {
    const url = AllTableUrl(`day?userId=${authUser}&date=${date}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  postAllTable: async (authUser, body) => {
    const url = AllTableUrl(`saveshowtable?userId=${authUser}`);
    let response;
    try {
      response = await instance.post(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  putAllTable: async (authUser, body) => {
    const url = AllTableUrl(`modify?userId=${authUser}`);
    let response;

    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  deleteAllTable: async (authUser, body) => {
    const url = AllTableUrl(`delete?userId=${authUser}`);
    let response;

    try {
      response = await instance.delete(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default AllTableService;
