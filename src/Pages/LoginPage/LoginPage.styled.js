import styled from 'styled-components';

const LoginBackground = styled.div`
  // layout
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  color: white;
  background-image: url('/asset/login.jpg'); no-repeat;
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

  .main {
    margin-top: 5%;
  }

  .title {
    font-size: 70px;
    margin: 20px;
    font-family: 'BMJUA';
  }

  .id {
    margin-top: 5%;
  }
  .idinput {
    padding-left : 10px;
    border-color : transparent;
    border-radius: 0.3em;
    height: 50px;
    width: 490px;
    font-size: 20px;
    font-family: 'BMJUA';
  }

  .emailinput {
    content: '이메일 : ';
  }

  .passwordinput {
    padding-left : 10px;
    border-color : transparent;
    border-radius: 0.3em;
    margin-top: 1%;
    height: 50px;
    width: 490px;
    font-size: 20px;
    font-family: 'BMJUA';
  }

  .loginbutton {
    border-radius: 0.3em;
    font-family: 'BMJUA';
    font-size: 20px;
    color : white;
    width: 510px;
    height: 2.5em;
    margin: 1em;
    //  cursor: pointer;
    background-color: #00AAFF;
  }

  .registerbutton {
    margin-top : 5%;
    font-family: 'BMJUA';
    font-size: 20px;
    text-decoration: underline;
    color : white;
    width: 500px;
  }

  .registerform {
    margin-top : 3%;
    width : 550px;
    height : 70%;
    background-color : #FFFFFF;
    border-radius: 1em;
  }

  .welcome {
    margin-top : 5%;
    color : black;
    font-family: 'BMJUA';
    font-size : 25px;
  }

  .registeridinput {
    border: 2px solid #868A8C;
    margin-top : 5%;
    padding-left : 10px;
    border-radius: 0.3em;
    height: 50px;
    width: 490px;
    font-size: 20px;
    font-family: 'BMJUA';
  }

  .registerpasswordinput {
    border: 2px solid #868A8C;
    margin-top : 2%;
    padding-left : 10px;
    border-radius: 0.3em;
    height: 50px;
    width: 490px;
    font-size: 20px;
    font-family: 'BMJUA';
  }

  .backbutton {
    margin-top : 15%;
    font-family: 'BMJUA';
    font-size: 20px;
    text-decoration: underline;
    color : #000000;
    width: 500px;
  }
`;

const Styled = { LoginBackground };

export default Styled;
