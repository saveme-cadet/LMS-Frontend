import styled from 'styled-components';

const CheckBackground = styled.div`
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

const CheckHeader = styled.div`
  background: ${props => {
    switch (props.day) {
      case 0:
        return `#d62d2d`;
      case 6:
        return `#378adc`;
      default:
        return `#afa9a9`;
    }
  }};
`;

const CheckBody = styled.div`
  .buttons {
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
    .major {
      button {
        width: 15em;
        height: 15em;
      }
    }
    .minor {
      display: flex;
      flex-direction: column;
      button {
        margin: 1em;
      }
    }
  }
`;

const Styled = { CheckBackground, CheckHeader, CheckBody };

export default Styled;
