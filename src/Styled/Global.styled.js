import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const ProfileBackgroundDiv = styled.div`
  // position
  position: absolute;
  top: 0px;
  left: 0px;

  // layout
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;

  // size
  width: 100%;
  height: 100%;

  // color
  background-color: #2a2d38;
`;

const Golbal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  .show-today {
    text-decoration: underline;
    text-underline-position: under;
    margin-left: 1em;
  }
  .change-today {
    margin-left: 4em;
  }
`;

const CusTab = styled(Tabs)`
  background-color: #220646;
  height: 100em;
  width: 7em;
  button {
    color: #ffffff;
    width: 9em;
  }
`;

const Body = styled.div`
  margin-left: 5em;
`;

const GlobalStyled = { ProfileBackgroundDiv, Golbal, CusTab, Body };

export default GlobalStyled;
