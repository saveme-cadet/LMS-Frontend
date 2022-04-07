import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from 'App';
import { CRUDUserService } from 'Network';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Button from '@mui/material/Button';

import Styled from './LoginPage.styled';

const LoginPage = () => {
  const navi = useNavigate();
  const auth = useContext(AuthContext);

  const [status, setStatus] = useState('login');

  const handleLogin = async body => {
    const result = await CRUDUserService.postLogin(body);
    if (!result) {
      alert('잘못된 아이디나 비밀번호 입니다!');
      return;
    }
    alert(`환영합니다, ${body.name}!`);
    auth.setIsLoading(true);
    const status = result.data[0];
    auth.setStatus(status);
    // console.log('role : ', status);
    localStorage.setItem('userId', status.userId);
    localStorage.setItem('userName', status.userName);
    localStorage.setItem('role', status.role);
    localStorage.setItem('team', status.team);

    auth.setIsLoading(false);
    navi('/');
  };
  const handleRegister = async body => {
    const name = body.name;
    const result = await CRUDUserService.postUser(body);
    if (!result) {
      alert('회원가입 에러! ');
      return;
    }
    handleLogin({
      name: name,
      password: 4242,
    });
    // const login = await CRUDUserService.postLogin({
    //   name: name,
    //   password: 4242,
    // });
    // if (!result) {
    //   alert('잘못된 아이디나 비밀번호 입니다!');
    //   return;
    // }
    // navi('/');
  };
  return (
    <Styled.LoginBackground>
      <div className="main">
        <img src="/asset/saveme.png" alt="logo" />
        <span className="title">구해줘 카뎃</span>
      </div>
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
    </Styled.LoginBackground>
  );
};

export default LoginPage;
