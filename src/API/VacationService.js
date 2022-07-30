import { instance } from './api';

const VacationUrl = path => {
  return `/${path}`;
};

const VacationService = {
  patchVacation: async (id, addDay) => {
    const url = VacationUrl(`vacations/${id}`);
    const body = { addedDays: addDay };
    let response;
    try {
      response = await instance.patch(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getUsedVaction: async () => {
    const url = VacationUrl(`used-vacations`);
    let response;
    try {
      response = await instance.patch(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  getRemainingVaction: async () => {
    const url = VacationUrl(`remaining-vacations`);
    let response;
    try {
      response = await instance.get(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default VacationService;
