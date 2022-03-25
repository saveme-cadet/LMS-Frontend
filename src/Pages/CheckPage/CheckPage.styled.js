import styled from 'styled-components';

const CheckBackground = styled.div`
  // position
  position: absolute;
  top: 0px;
  // left: 7em;

  // layout
  display: flex;
  flex-direction: column;
  // size
  width: 100%;
  height: 100%;

  // color
  background-color: ${props => {
    switch (props.type) {
      case 0:
        return `#777777`;
      case 1:
        return `#666666`;
      case 2:
        return `#888888`;

      case 3:
        return `#999999`;

      case 4:
        return `#aaaaaa`;

      case 5:
        return `#bbbbbb`;

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

  .check-box {
    div {
      border: 1px solid white;
      background-color: white;
      border-radius: 16px;
      box-shadow: inset 0 0 8px #deb13a;
      width: 160px;
      height: 160px;
    }
  }
`;

const Styled = { CheckBackground, CheckHeader, CheckBody };

export default Styled;
