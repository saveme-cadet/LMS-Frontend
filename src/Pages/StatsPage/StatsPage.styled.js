import styled from 'styled-components';

const Stat = styled.div`
  position: relative;
  width: 100%;
  .header {
    display: flex;

    .list {
      display: flex;
      flex-direction: row;
      div {
        margin: 0.5em;
        cursor: pointer;
      }
    }
  }
  .body {
    display: flex;
    flex-direction: row;
  }
  .month {
    position: absolute;
    background: gray;

    top: 20em;
    left: 0;
    width: 50em;
    height: 75em;
  }
  .day {
    position: absolute;
    background: gray;

    top: 20em;
    right: 0;
    width: 40em;
    height: 82em;
  }
`;

const Styled = { Stat };

export default Styled;
