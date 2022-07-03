import { useState } from 'react';
import styledComp from 'styled-components';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const RegisterForm = ({ onClickRegister, setStatus }) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = event => {
    setId(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleClick = async () => {
    if (!id || !email) {
      alert('전부 입력해주세요!');
      return;
    }
    onClickRegister({
      username: id,
      password: password,
      email: email,
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
      <RegisterMain>
        <form>
          <RegisterWelcome>
            <h2>환영합니다!</h2>
            <h3>새로운 회원이 되어 카뎃을 구해주세요!</h3>
          </RegisterWelcome>
          <RegisterInputForm>
            <RegisterInput
              value={id}
              placeholder="인트라 ID"
              onChange={handleChangeId}
              onKeyPress={handlePressEnter}
            />
            <RegisterInput
              value={password}
              placeholder="비밀번호"
              onChange={handleChangePassword}
              onKeyPress={handlePressEnter}
            />
            <RegisterInput
              value={email}
              placeholder="이메일 ex) example@student.42seoul.kr"
              onChange={handleChangeEmail}
              onKeyPress={handlePressEnter}
            />
          </RegisterInputForm>
          <LoginButton variant="contained" onClick={handleClick}>
            함께하기!
          </LoginButton>
          <BackButton onClick={() => setStatus('login')}>되돌아가기</BackButton>
        </form>
      </RegisterMain>
    </>
  );
};

export default RegisterForm;

const RegisterMain = styledComp.div`
  margin-top: 3%;
  width: 600px;
  height: 70%;
  background-color: #ffffff;
  border-radius: 1em;
`;

const RegisterWelcome = styledComp.div`
  margin-top: 5%;
  color: black;
  font-family: 'BMJUA';
  font-size: 25px;
`;

const RegisterInputForm = styledComp.div`
  margin-top: 5%;
`;

const RegisterInput = styledComp.input`
  border: 2px solid #868a8c;
  margin-top: 2%;
  padding-left: 10px;
  border-radius: 0.3em;
  height: 50px;
  width: 490px;
  font-size: 20px;
  font-family: 'BMJUA';
`;

const LoginButton = styled(Button)({
  borderRadius: '0.3em',
  fontFamily: 'BMJUA',
  fontSize: '20px',
  color: 'white',
  width: '510px',
  height: '2.5em',
  margin: '1em',
  backgroundColor: '#00aaff',
});

const BackButton = styled(Button)({
  marginTop: '15%',
  fontFamily: 'BMJUA',
  fontSize: '20px',
  textDecoration: 'underline',
  color: '#000000',
  width: '150px',
});
