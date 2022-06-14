import { instance } from './api';

const AllTableUrl = path => {
  return `/alltable/${path}`;
};

const AllTableService = {
  putAllTableCheckIn: async body => {
    const url = AllTableUrl('checkin?date=2022-03-04');
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  putAllTableCheckOut: async body => {
    const url = AllTableUrl('checkout?date=2022-03-04');
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getAllTable: async (date, userId) => {
    const url = AllTableUrl(`day?date=${date}&userId=${userId}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postAllTable: async id => {
    // 미사용
    const url = AllTableUrl(`saveshowtable?userId=${id + 1}`);
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default AllTableService;
