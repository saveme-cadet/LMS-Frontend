import styled from 'styled-components';

const AdminBackground = styled.div`
  // position
  position: absolute;
  top: 5em;

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
const AdminFeature = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  button {
    width: 20em;
    height: 5em;
    border: 1px solid #4870fd;
    color: 4870fd;
  }
`;

const AdminTable = styled.div`
  .table {
    width: 90%;
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
  width: 90%;
  margin: 1em;

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

const AdminAddUser = styled.div`
  width: 90%;
  margin: 1em;
`;

const Modal = styled.div`
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
  AdminFeature,
  AdminTable,
  AdminChange,
  AdminAddUser,
  Modal,
};

export default Styled;
