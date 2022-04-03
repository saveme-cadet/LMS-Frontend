import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const LoginForm = ({ onClickLogin, setStatus }) => {
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
    onClickLogin({
      name: id,
      password: password,
    });
    setId('');
    setPassword('');
  };
  const handlePressEnter = e => {
    if (e.key === 'Enter') handleClick();
  };
  return (
    <>
      <h2>로그인</h2>
      <div className="id">
        <input
          value={id}
          placeholder="아이디"
          onChange={handleChangeId}
          onKeyPress={handlePressEnter}
        />
      </div>
      <div className="password">
        <input
          value={password}
          placeholder="비밀번호"
          onChange={handleChangePassword}
          onKeyPress={handlePressEnter}
        />
      </div>

      <Button onClick={handleClick}>입력</Button>
      <Button onClick={() => setStatus('register')}>회원가입으로</Button>
    </>
  );
};

export default LoginForm;
