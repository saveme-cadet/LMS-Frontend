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
    border-radius: 10px;
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
`;

const AojiTimer = styled.div`
  flex: 2;
  font-size: 60px;
  font-weight: bold;

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
`;

const AojiLog = styled.div`
  flex: 5;

  .body {
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;

    // overflow: auto;
  }
  .row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    * {
      flex: 1 1;
      text-align: center;
      margin: 15px 0 15px 0;
    }
    .button {
      border: 1px solid #4870fd;
      border-radius: 10px;
      color: #4870fd;
      width: 60px;
      text-align: center;
      cursor: pointer;
      margin: 0 auto;
    }
  }
  .temp {
    width: 98%;
  }
`;
const Styled = { AojiBackground, AojiTimer, AojiLog };
export default Styled;
