import { kakaoInstance } from './api';

const REST_API_KEY = 'f671f59a6deb4cc1e2daa5fc1ab0cc62';
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
const CLIENT_SECRET = '1kmpT91tZ7xX9Cx5cEbnJpqgWIaXBwg0';
// const OAuthUrl = path => {
//   return `/${path}`;
// };/oauth

const OAuthService = {
  getToken: async code => {
    const url = '/token';
    let response;
    const body = {
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    };
    try {
      response = await kakaoInstance.get(url, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },
};

export default OAuthService;
