const API_URL = 'https://www.savvemecadet.click/api';

const CHECK_IN = 'checkIn';
const CHECK_OUT = 'checkOut';
const TIMEZONE_OFFSET = new Date().getTimezoneOffset() * 60000;

const TEAM_ID = {
  ALL: 0,
  RED: 1,
  BLUE: 2,
};

const TEAM_NAME = {
  RED: 'RED',
  BLUE: 'BLUE',
};

const ROLE_NAME = {
  ROLE_ADMIN: '관리자',
  ROLE_MANAGER: '머슴',
  ROLE_USER: '일반',
  ROLE_UNAUTHORIZED: '게스트',
};

const API_PARAMS = {
  GET_USERS_OFFSET: 0,
  GET_USERS_SIZE: 10,
};

const VACATION = {
  PLUS_HALF: 0.5,
  ZERO: 0,
  MINUS_HALF: -0.5,
};

const ERROR_MESSAGES = {
  NO_DATA: 'NO_DATA',
  NO_AUTH: 'NO_AUTH',
  NOT_YET: 'NOT_YET',
  WEEKEND: 'WEEKEND',
};

const MODAL_TYPE = {
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

export {
  TIMEZONE_OFFSET,
  CHECK_IN,
  CHECK_OUT,
  TEAM_NAME,
  TEAM_ID,
  API_URL,
  API_PARAMS,
  VACATION,
  ERROR_MESSAGES,
  ROLE_NAME,
  MODAL_TYPE,
};
