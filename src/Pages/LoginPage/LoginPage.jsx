import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { CRUDUserService } from 'Network';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Button from '@mui/material/Button';

import Styled from './LoginPage.styled';

const LoginPage = () => {
  const navi = useNavigate();
  const [status, setStatus] = useState('login');

  const handleLogin = async body => {
    const result = await CRUDUserService.postLogin(body);
    if (!result) {
      alert('잘못된 아이디나 비밀번호 입니다!');
      return;
    }
    console.log(result);
    navi('/');
  };
  const handleRegister = async body => {
    const name = body.name;
    const result = await CRUDUserService.postUser(body);
    if (!result) {
      alert('회원가입 에러! ');
      return;
    }
    const login = await CRUDUserService.postLogin({
      name: name,
      password: 4242,
    });
    navi('/');
  };
  return (
    <Styled.LoginBackground>
      <div>
        <text className="title">구해줘 카뎃</text>
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
            ;
          </>
        )}
      </div>
    </Styled.LoginBackground>
  );
};

export default LoginPage;
