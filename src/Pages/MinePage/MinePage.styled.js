import styled from 'styled-components';

const AojiBackground = styled.div`
  padding: 0 30px;

  .box {
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    text-align: left;
  }
  .header {
    font-size: 30px;
    font-weight: bold;
  }
  .body {
    display: flex;
    flex-direction: column;
  }
`;

const AojiBody = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const AojiTimer = styled.div`
  flex: 1;
  font-size: 30px;
  font-weight: bold;
  height: 400px;
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
  .body {
    align-items: center;
    justify-content: center;
    height: 400px;
  }
  .start {
    background-color: #4870fd;
  }
  .end {
    background-color: #ff4646;
  }
`;

const AojiLog = styled.div`
  flex: 1;

  .body {
    overflow: auto;
    align-items: center;
    max-height: 400px;
    @media (min-width: 1200px) {
      height: 400px;
    }
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
      border-radius: 10px;
      width: 60px;
      text-align: center;
      margin: 0 auto;
    }
    .valid {
      border: 1px solid #4870fd;
      color: #4870fd;
      cursor: pointer;
    }
    .not-valid {
      border: 1px solid #a7a7a7;
      color: #a7a7a7;
    }
  }
  .temp {
  }
  .score {
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
  }
`;
const Styled = { AojiBackground, AojiBody, AojiTimer, AojiLog };
export default Styled;
