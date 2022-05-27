import { useState } from 'react';

import Button from '@mui/material/Button';

const LoginForm = ({ onClickLogin, setStatus }) => {
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
      <div className="id">
        <input
          value={id}
          placeholder="인트라 ID"
          onChange={handleChangeId}
          onKeyPress={handlePressEnter}
          className="idinput"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={handleChangePassword}
          onKeyPress={handlePressEnter}
          className="passwordinput"
          // required
        />
      </div>

      <Button onClick={handleClick} className="loginbutton" variant="contained">
        로그인
      </Button>
      <Button onClick={() => setStatus('register')} className="registerbutton">
        아직 회원이 아니신가요?
      </Button>
    </>
  );
};

export default LoginForm;
