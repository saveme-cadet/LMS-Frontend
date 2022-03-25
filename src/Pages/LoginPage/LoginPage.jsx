import { useNavigate } from 'react-router-dom';

import Styled from './LoginPage.styled';

const LoginPage = () => {
  const navi = useNavigate();
  return (
    <Styled.LoginBackground>
      <div>
        <text className="title">구해줘 카뎃</text>
        <button
          onClick={() => {
            navi('/');
          }}
        >
          Login
        </button>
      </div>
    </Styled.LoginBackground>
  );
};

export default LoginPage;
