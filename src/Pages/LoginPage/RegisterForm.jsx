import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

const RegisterForm = ({ onClickRegister, setStatus }) => {
  const navi = useNavigate();
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = event => {
    setId(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
    if (!id || !email) {
      alert('전부 입력해주세요!');
      return;
    }
    onClickRegister({
      name: id,
      email: email,
      password: 4242, // 비밀번호는 4242로 통일
      birthday: '2022-04-01',
    });
    setId('');
    setEmail('');
    setPassword('');
  };
  const handlePressEnter = e => {
    if (e.key === 'Enter') handleClick();
  };
  return (
    <>
      <div className="registerform">
        <form onKeyPress={handlePressEnter}>
          <div className="welcome">
            <h2>환영합니다!</h2>
            <h3>새로운 회원이 되어 카뎃을 구해주세요!</h3>
          </div>
          <div className="id">
            <input
              value={id}
              placeholder="인트라 ID"
              onChange={handleChangeId}
              onKeyPress={handlePressEnter}
              className="registeridinput"
            />
          </div>
          <div className="email">
            <input
              value={email}
              placeholder="이메일 ex) example@student.42seoul.kr"
              onChange={handleChangeEmail}
              onKeyPress={handlePressEnter}
              className="registerpasswordinput"
            />
          </div>
          <Button
            variant="contained"
            onClick={handleClick}
            className="loginbutton"
          >
            함께하기!
          </Button>
          <Button onClick={() => setStatus('login')} className="backbutton">
            되돌아가기
          </Button>
          {/* <input
        value={password}
        placeholder="비밀번호"
        onChange={handleChangePassword}
      /> */}
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
