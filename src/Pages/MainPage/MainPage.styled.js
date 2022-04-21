import styled from 'styled-components';

const MainBackground = styled.div`
  // position
  position: relative;
  box-sizing: border-box;
  padding: 50px;

  // layout
  display: flex;
  flex-direction: column;
  // size
  margin: auto;
  // max-width: 900px;

  .change-today {
    // position: absolute;
  }
`;

const MainTable = styled.div`
  border: 1px solid #c0c0c0;
  padding: 1em;
  border-radius: 1em;
  height: 550px;
  position: relative;
  .table {
    height: calc(100% - 50px);

    .MuiDataGrid-footerContainer {
      display: none;
    }

    .info {
      width: 8em;
      padding: 0.2em;
      border-radius: 10em;
      text-align: center;
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

    .type {
      color: #ffffff;
      width: 8em;
      padding: 0.2em;
      border-radius: 10em;
      text-align: center;
    }
    .check {
      background-color: #2ce054;
    }
    .late {
      background-color: #ffcb46;
    }
    .not {
      background-color: #ff4646;
    }
    .vacancy {
      background-color: #a477ee;
    }
    .illness {
      background-color: #a477ee;
    }
    .vacation {
      background-color: #2891f1;
    }
  }
`;

const MainChange = styled.div``;

const MainBody = styled.div``;

const Styled = { MainBackground, MainTable, MainChange, MainBody };

export default Styled;
