import { instance } from './api';

const AllTableUrl = path => {
  return `/alltable/${path}`;
};

const AllTableService = {
  putAllTableCheckIn: async body => {
    const url = AllTableUrl('modifycheckin?date=2022-03-04');
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  putAllTableCheckOut: async body => {
    const url = AllTableUrl('modifycheckout?date=2022-03-04');
    let response;
    try {
      response = await instance.put(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  getAllTable: async date => {
    const url = AllTableUrl(`day?date=${date}`);
    let response;

    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  postAllTable: async id => {
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
