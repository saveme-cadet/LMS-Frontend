import styled from 'styled-components';

const Golbal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  .show-today {
    text-decoration: underline;
    text-underline-position: under;
    margin-left: 1em;
  }
  .warning {
    font-size: 30px;
    text-align: center;
    color: #c0c0c0;
  }
  font-family: 'Noto Sans KR', sans-serif;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #220646;
  height: 100em;
  width: 10%;
  min-width: 9em;
  max-width: 13em;
  .home {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2em;
    cursor: pointer;
    img {
      margin: 0.2em;
    }
  }
  button {
    color: #ffffff;
    max-width: 13em;
  }
`;

const Body = styled.div`
  margin-left: 5em;
  width: 90%;
`;

const GlobalStyled = { Golbal, SideBar, Body };

export default GlobalStyled;
