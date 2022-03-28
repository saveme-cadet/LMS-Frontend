import { useNavigate, Link } from 'react-router-dom';
import Styled from './LoginPage.styled';

const REST_API_KEY = 'f671f59a6deb4cc1e2daa5fc1ab0cc62';
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

const OAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginPage = () => {
  const navi = useNavigate();

  return (
    <Styled.LoginBackground>
      <div>
        <text className="title">구해줘 카뎃</text>
        {/* <button
          onClick={() => {
            navi(OAuthUrl);
          }}
        >
        </button> */}
        <a href={OAuthUrl}>Login</a>
      </div>
    </Styled.LoginBackground>
  );
};

export default LoginPage;
