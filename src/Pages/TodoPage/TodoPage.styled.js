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
  position: absolute;
  top: 5em;
  // left: 7em;
  // layout
  display: flex;
  flex-direction: column;
  // size
  width: 80%;
  height: 85%;

  .main {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .todo {
    border: 1px solid #c0c0c0;
    padding: 1em;
    border-radius: 1em;

    margin-right: 5%;
    width: 40%;
    heigh: 50%;
  }
  .othercadet {
    background-color: #eeeeee;
    padding: 1em;
    border-radius: 1em;
    width: 50%;
  }
  .text {
    border: 0px;
    border-bottom: 3px solid #c0c0c0;
    margin-top: 30px;
    margin-left: 20px;
    font-size: 17px;
    height: 35px;
    width: 75%;
    text-align: center;
  }
  .form {
    margin-left: 10px;
    margin-top: 30px;
    height: 85%;
    font-size: 15px;
  }
  .ulist {
    height: 80%;
  }
  .progressbar {
    width: 90%;
    margin-top: 10px;
    margin-left: 20px;
  }
  .button {
    border-radius: 5px;
    margin-left: 15px;
    width: 15%;
    height: 40px;
    font-size: 17px;
    background-color: transparent;
  }
  .check {
    height: 35px;
  }
`;

const Styled = {
  CusDiv,
  CusBox,
  MainBackground,
};
export default Styled;
