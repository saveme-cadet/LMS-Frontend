import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from 'App';
import { CRUDUserService } from 'API';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import styled from 'styled-components';
import { MODAL_TYPE } from 'Utils/constants';
import IssueTempPassword from './IssuePasswordModal';

const LoginPage = () => {
  const navi = useNavigate();
  const auth = useContext(AuthContext);
  const { modalType } = useContext(AuthContext);
  const [pageStatus, setPageStatus] = useState('login');

  const handleLogin = async body => {
    if (auth.isLoading) return;

    auth.setIsLoading(true);
    const result = await CRUDUserService.postLogin(body);
    if (result.status !== 200) {
      alert('잘못된 아이디나 비밀번호 입니다!');
      return;
    }
    alert(`환영합니다, ${body.username}!`);
    localStorage.setItem('userId', result.data.id);
    localStorage.setItem('role', result.data.role);
    auth.setStatus({ userId: result.data.id, role: result.data.role }); // TODO: postLogin res에 role 담겨서 오는지 확인
    auth.setIsLoading(false);
    navi('/');
  };

  const handleRegister = async userLoginInfo => {
    if (auth.isLoading) return;
    auth.setIsLoading(true);
    const result = await CRUDUserService.postUser(userLoginInfo);
    // console.log('result : ', result);
    if (result.status !== 201) {
      if (result.status === 400) {
        alert('비밀번호가 포맷에 맞지 않습니다!'); // TODO : Change error window in postUser
      } else if (result.status === 409) alert('이미 존재하는 유저입니다!');
      else alert('서버 에러!');
      return;
    }
    handleLogin(userLoginInfo);
    auth.setIsLoading(false);
  };
  return (
    <>
      <LoginBackground>
        <LoginMain>
          <img src="/asset/saveme.png" alt="logo" />
          <LoginMainTitle>구해줘 카뎃</LoginMainTitle>
        </LoginMain>
        {pageStatus === 'login' ? (
          <>
            <LoginForm
              onClickLogin={handleLogin}
              setPageStatus={setPageStatus}
            />
          </>
        ) : (
          <>
            <RegisterForm
              onClickRegister={handleRegister}
              setPageStatus={setPageStatus}
            />
          </>
        )}
        <IssueTempPassword />
      </LoginBackground>
    </>
  );
};

export default LoginPage;

const LoginBackground = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  background-image: url('/asset/login.jpg');
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
  }
`;

const LoginMain = styled.div`
  margin-top: 5%;
`;
const LoginMainTitle = styled.span`
  font-size: 70px;
  margin: 20px;
  font-family: 'BMJUA';
  color: white;
`;
