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

  return (
    <>
      <h2>회원가입</h2>
      <div className="id">
        <input value={id} placeholder="아이디" onChange={handleChangeId} />
      </div>
      <div className="email">
        <input
          value={email}
          placeholder="이메일"
          onChange={handleChangeEmail}
        />
      </div>

      {/* <input
        value={password}
        placeholder="비밀번호"
        onChange={handleChangePassword}
      /> */}
      <Button onClick={handleClick}>입력</Button>
      <Button onClick={() => setStatus('login')}>로그인으로</Button>
    </>
  );
};

export default RegisterForm;
