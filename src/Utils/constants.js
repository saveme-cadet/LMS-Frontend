const CHECK_IN = 'checkIn';
const CHECK_OUT = 'checkOut';

const TARGET_AUTH = {
  CADET_MYSELF: 0,
  CADET_OTHER_CADET: -1,
  ADMIN_OTHER_TEAM: -2,
};

const TEAM = {
  ALL: 0,
  RED: 1,
  BLUE: 2,
};
const constants = { CHECK_IN, CHECK_OUT, TARGET_AUTH, TEAM };

export default constants;
