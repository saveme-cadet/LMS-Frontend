import styled from 'styled-components';

const AdminBackground = styled.div`
  // position

  // layout
  display: flex;
  flex-direction: column;
  // size
  padding: 50px;

  .box {
    padding: 1em;
    border-radius: 1em;
    // border: 1px solid #dbdbdb;
    text-align: left;
  }
  .title {
    font-size: 30px;
    font-weight: bold;
  }
`;
const AdminFeature = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 150px;
    height: 50px;
    border: 1px solid #4870fd;
    color: 4870fd;
    margin: 5px;
  }
`;

const AdminTable = styled.div`
  margin: 1em 0 1em 0;
  border: 1px solid #c0c0c0;
  padding: 1em;

  height: 70%;
  border-radius: 1em;

  .table {
    height: 30em;
    margin: 1em;
    margin-bottom: 2em;
    .info {
      width: 8em;
      padding: 0.2em;
      border-radius: 10em;
      text-align: center;
    }
    .불참 {
      color: white;
      background-color: black;
    }
    .참가 {
      color: black;
      border: 1px solid black;
      background-color: white;
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
    .카뎃 {
      background-color: #cccccc;
    }
  }
`;

const AdminChange = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 1em;
  padding: 1em;
  height: 50%;

  .action > * {
    color: #292929;
    width: 8em;
    height: 4em;
    margin: 0 0.5em 0 0.5em;
  }
  .user-status > * {
    margin: 0.4em;
  }
  .불참 {
    color: white;
    background-color: black;
  }
  .참가 {
    color: black;
    border: 1px solid black;
    background-color: white;
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
  .카뎃 {
    background-color: #cccccc;
  }
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
const ShakeTeam = styled.div`
  .team-members {
    display: flex;
    flex-direction: row;
  }
  .team-member {
    border-radius: 10%;
    margin: 5px;
    padding: 5px;
  }
  .red {
    .team-member {
      background-color: #dc143c;
    }
  }
  .blue {
    .team-member {
      background-color: #0079f0;
    }
  }
  .newtral {
    .team-member {
      background-color: gray;
    }
  }
`;

const AdminTodo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60%;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  span {
    text-align: center;
  }
  ul {
    margin: 50px;
  }
  li {
    padding: 10px 0;
    /* list-style: none; */
  }
`;

const Styled = {
  AdminBackground,
  AdminFeature,
  AdminTable,
  AdminChange,
  Modal,
  ShakeTeam,
  AdminTodo,
};

export default Styled;
