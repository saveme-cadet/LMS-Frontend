import styled from 'styled-components';

const Stat = styled.div`
  position: relative;
  width: 100%;
  .month {
    position: absolute;
    background: gray;

    left: 0;
    width: 50em;
    height: 75em;
  }
  .day {
    position: absolute;
    background: gray;

    top: 0;
    right: 0;
    width: 40em;
    height: 82em;
  }
`;

const Styled = { Stat };

export default Styled;
