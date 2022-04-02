import styled from 'styled-components';

const LoginBackground = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  color: white;
  background-color: #220646;
  // size
  width: 100%;
  height: 100%;

  .title {
    font-size: 50px;
    margin: 20px;
  }

  .id::before {
    content: '아이디 :  ';
  }

  .email::before {
    content: '이메일 : ';
  }
  .password::before {
    content: '비밀번호 : ';
  }
  .password {
    padding-right: 15px;
  }
  button {
    font-size: 20px;
    width: 20%;
    height: 2.5em;
    margin: 1em;
    //  cursor: pointer;
    background-color: white;
  }
`;

const Styled = { LoginBackground };

export default Styled;
