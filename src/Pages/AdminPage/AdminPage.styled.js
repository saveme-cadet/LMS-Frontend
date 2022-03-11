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

  // box
  .box {
    background-color: #d8d8d8;
    margin: 0.5em;
    padding: 1em;
    border-radius: 1em;
  }
`;

const AdminTable = styled.div`
  .table {
    width: 100%;
    height: 30em;
    margin: 1em;
    margin-bottom: 3em;
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

const AdminAddUser = styled.div``;

const AdminShakeUser = styled.div`
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(216, 216, 216, 0.9);
  }
`;

const Styled = {
  AdminBackground,
  AdminTable,
  AdminChange,
  AdminAddUser,
  AdminShakeUser,
};

export default Styled;
