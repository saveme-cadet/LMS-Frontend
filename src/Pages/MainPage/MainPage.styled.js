import styled from 'styled-components';

const MainBackground = styled.div`
  // position
  position: absolute;
  top: 5em;
  // left: 7em;

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
    .머슴 {
      background-color: yellow;
    }
    .일반 {
      background-color: #cccccc;
    }

    .check {
      color: green;
    }
    .late {
      color: yellow;
    }
    .not {
      color: red;
    }
    .vacancy {
      color: blue;
    }
    .illness {
      color: purple;
    }
  }
`;

const MainChange = styled.div``;

const MainBody = styled.div``;

const Styled = { MainBackground, MainTable, MainChange, MainBody };

export default Styled;
