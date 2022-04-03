import styled from 'styled-components';

const AojiBackground = styled.div`
  // position
  position: absolute;
  top: 5em;

  // layout
  display: flex;
  flex-direction: row;
  // size
  width: 80%;
  height: 100%;

  .box {
    height: 60%;

    padding: 10px;
    margin: 20px;
    border-radius: 20px;
    border: 1px solid #dbdbdb;
    text-align: left;
  }
  .header {
    font-size: 40px;
    font-weight: bold;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  .body > * {
    margin: 50px;
  }
  .timer {
    flex: 2;
    font-size: 60px;
    font-weight: bold;
  }
  button {
    width: 170px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    border: 0;
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
  .start {
    background-color: #4870fd;
  }
  .end {
    background-color: #ff4646;
  }
  .log {
    flex: 5;
  }
`;

const Styled = { AojiBackground };
export default Styled;
