import styled from 'styled-components';

const CheckBackground = styled.div`
  // position
  position: absolute;
  top: 0px;
  left: 7em;

  // layout
  display: flex;
  flex-direction: column;
  // size
  width: 100%;
  height: 100%;

  // color
  background-color: ${props => {
    switch (props.day) {
      case 0:
        return `#d62d2d`;
      case 1:
        return `#111`;
      case 2:
        return `#222`;

      case 3:
        return `#333`;

      case 4:
        return `#444`;

      case 5:
        return `#555`;

      default:
        return `#afa9a9`;
    }
  }};
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
