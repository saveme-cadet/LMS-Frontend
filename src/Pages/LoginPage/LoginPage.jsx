import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { CRUDUserService } from 'Network';

import Button from '@mui/material/Button';

import Styled from './LoginPage.styled';

const LoginPage = () => {
  const navi = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = event => {
    setId(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  const handleClick = async () => {
    if (!id || !password) {
      alert('전부 입력해주세요!');
      return;
    }
    const result = await CRUDUserService.postLogin({
      name: id,
      password: password,
    });
    setId('');
    setPassword('');
  };

  return (
    <Styled.LoginBackground>
      <div>
        <text className="title">구해줘 카뎃</text>

        <input value={id} placeholder="아이디" onChange={handleChangeId} />
        <input
          value={password}
          placeholder="비밀번호"
          onChange={handleChangePassword}
        />

        <Button onClick={handleClick}>로그인</Button>

        <Button onClick={handleClick}>회원가입</Button>
      </div>
    </Styled.LoginBackground>
  );
};

export default LoginPage;
