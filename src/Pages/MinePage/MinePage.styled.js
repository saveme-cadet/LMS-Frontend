import styled from 'styled-components';

const AojiBackground = styled.div`
  // position
  position: absolute;
  top: 5em;
  // left: 7em;

  // layout
  display: flex;
  flex-direction: row;
  // size
  width: 80%;
  height: 100%;

  .box {
    height: 60%;

    padding: 1em;
    margin: 1em;
    border-radius: 1em;
    border: 1px solid #dbdbdb;
    text-align: left;
  }
`;

const Styled = { AojiBackground };
export default Styled;
