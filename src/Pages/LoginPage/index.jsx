import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from 'App';
import { CRUDUserService } from 'API';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Button from '@mui/material/Button';

import styled from 'styled-components';

const LoginPage = () => {
  const navi = useNavigate();
  const auth = useContext(AuthContext);

  const [status, setStatus] = useState('login');

  const handleLogin = async body => {
    const result = await CRUDUserService.postLogin(body);
    if (!result) {
      alert('잘못된 아이디나 비밀번호 입니다!'); // TODO : change window type + Timer
      return;
    }
    alert(`환영합니다, ${body.name}!`); // TODO : change window type + timer
    auth.setIsLoading(true);
    const status = result.data[0];
    auth.setStatus(status);
    localStorage.setItem('userId', status.userId);
    localStorage.setItem('userName', status.userName);
    localStorage.setItem('role', status.role);
    localStorage.setItem('team', status.team);
    auth.setIsLoading(false);
    navi('/');
  };
  const handleRegister = async body => {
    const name = body.username;
    const password = body.password;
    const result = await CRUDUserService.postUser(body);
    if (!result) {
      // alert('회원가입 에러! '); // TODO : Change error window in postUser
      return;
    }
    handleLogin({
      name: name,
      password: password,
    });
  };
  return (
    <LoginBackground>
      <LoginMain>
        <img src="/asset/saveme.png" alt="logo" />
        <LoginMainTitle>구해줘 카뎃</LoginMainTitle>
      </LoginMain>
      {status === 'login' ? (
        <>
          <LoginForm onClickLogin={handleLogin} setStatus={setStatus} />
        </>
      ) : (
        <>
          <RegisterForm
            onClickRegister={handleRegister}
            setStatus={setStatus}
          />
        </>
      )}
    </LoginBackground>
  );
};

export default LoginPage;

const LoginBackground = styled.div`
// layout
display: flex;
flex-direction: column;
align-items: center;

text-align: center;
color: white;
background-image: url('/asset/login.jpg'); no-repeat;
background-size: cover;
// background-color: #220646;

// size
width: 100%;
height: 100%;

@font-face {
  font-family: 'BMJUA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}`;

const LoginMain = styled.div`
  margin-top: 5%;
`;
const LoginMainTitle = styled.span`
  font-size: 70px;
  margin: 20px;
  font-family: 'BMJUA';
`;
