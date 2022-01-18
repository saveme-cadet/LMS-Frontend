import styled from 'styled-components';

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
  flex-direction: horizontal;
`;

const GlobalStyled = { ProfileBackgroundDiv, Golbal };

export default GlobalStyled;
