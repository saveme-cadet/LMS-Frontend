import styled from 'styled-components';

const AdminBackground = styled.div`
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

const AdminTable = styled.div`
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
    .머슴 {
      background-color: #ffd700;
    }
  }
`;

const AdminChange = styled.div`
  button {
    color: #292929;
  }
  .off {
    background-color: #848484;
  }
  .on {
    background-color: #cfcfcf;
  }
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
`;

const AdminBody = styled.div``;

const Styled = { AdminBackground, AdminTable, AdminChange, AdminBody };

export default Styled;
