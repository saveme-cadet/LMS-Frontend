import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Styled from './LoginPage.styled';

const REST_API_KEY = 'f671f59a6deb4cc1e2daa5fc1ab0cc62';
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

const OAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const LoginPage = () => {
  const navi = useNavigate();
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  const handleClick = () => {};
  const handleChangeId = event => {
    setId(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  return (
    <Styled.LoginBackground>
      <div>
        <text className="title">구해줘 카뎃</text>

        <input placeholder="이메일" onClick={handleChangeId} />
        <input placeholder="비밀번호" onClick={handleChangePassword} />

        <button onClick={handleClick}></button>

        <a href={OAuthUrl}>로그인</a>
      </div>
    </Styled.LoginBackground>
  );
};

export default LoginPage;
