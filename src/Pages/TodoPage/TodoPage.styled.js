import styled from 'styled-components';
import Box from '@mui/material/Box';

const CusDiv = styled.div`
  column-count: 2;
`;

const CusBox = styled(Box)`
  background: green;
`;

const MainBackground = styled.div`
  // position
  position: relative;
  box-sizing: border-box;
  padding: 50px;
  // layout
  display: flex;
  flex-direction: column;
  // size
  width: 100%;
  height: 100%;

  .time {
    margin-bottom: 25px;
  }

  .main {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 183px);
  }
  .todo {
    border: 1px solid #c0c0c0;
    padding: 1em;
    border-radius: 1em;

    margin-right: 50px;
    width: 40%;
    heigh: 50%;
  }
  .othercadet {
    overflow: auto;
    flex-wrap: wrap;
    background-color: #eeeeee;
    border: 1px solid #eeeeee;
    padding: 1em;
    border-radius: 1em;
    flex-direction: column;
    width: 50%;
    max-height: 100%;
  }

  .text {
    border: 0px;
    border-bottom: 3px solid #c0c0c0;
    margin-top: 30px;
    font-size: 17px;
    height: 35px;
    width: calc(100% - 80px);
    text-align: center;
  }
  .form {
    // margin-left: 10px;
    // margin-top: 30px;
    // height: 85%;
    font-size: 15px;
  }
  .todo__header {
    width: 100%;
  }
  .ulist {
  }
  .progressbar {
    width: 90%;
    margin-top: 10px;
    margin-left: 20px;
  }
  .button {
    border-radius: 5px;
    margin-left: 15px;
    width: 60px;
    height: 40px;
    font-size: 17px;
    background-color: transparent;
  }
  .check {
  }
  .cadetlist {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    // margin-left: 3%;
    height: 95%;
  }
  .cadet {
    border: 0px;
    padding: 1em;
    border-radius: 1em;
    background-color: white;

    flex: 1 1 40%;
    margin: 0px 0px 40px 10px;
    max-width: 40%;
    height: 300px;
  }
  .title {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .otherstodolist {
    margin-left: -10px;
    margin-bottom: -5px;
  }
  .othercadetname {
    margin-top: -5px;
    font-size: 20px;
  }
  .otherstodo {
    overflow: auto;
    margin-top: 5%;
    margin-left: 5%;
    height: 80%;
  }
  .none {
    justify-content: center;
    align-item: center;
    text-align: center;
    margin-top: 45%;
    margin-left: -5%;
  }
  .notvaliddate {
    justify-content: center;
    align-item: center;
    text-align: center;
    margin-top: 50%;
  }
`;

const Styled = {
  CusDiv,
  CusBox,
  MainBackground,
};
export default Styled;
