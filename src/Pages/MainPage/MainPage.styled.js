import styled from 'styled-components';

const MainBackground = styled.div`
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
`;

const MainTable = styled.div`
  .table {
    width: 100%;
    height: 30em;
    .red {
      background-color: #dc143c;
    }
    .blue {
      background-color: #0079f0;
    }
    .out {
      background-color: #808080;
    }
  }
`;

const MainChange = styled.div`
  .red {
    background-color: #dc143c;
  }
  .blue {
    background-color: #0079f0;
  }
  .머슴 {
    background-color: #ffd700;
  }
`;

const MainBody = styled.div``;

const Styled = { MainBackground, MainTable, MainChange, MainBody };

export default Styled;
