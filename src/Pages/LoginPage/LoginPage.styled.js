import styled from 'styled-components';

const LoginBackground = styled.div`
  // position
  position: absolute;
  top: 5em;
  // left: 7em;

  // layout
  display: flex;
  flex-direction: column;
  background-color: #220646;
  // size
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    margin: auto 0;

    .title {
      color: white;
      font-size: 50px;
      margin: 20px;
    }
    button {
      font-size: 30px;

      width: 15%;
      height: 2.5em;
      margin: auto;
      cursor: pointer;
    }
  }
`;

const Styled = { LoginBackground };

export default Styled;
