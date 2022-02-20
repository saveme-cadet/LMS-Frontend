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
  }
`;

const AdminChange = styled.div``;

const AdminBody = styled.div``;

const Styled = { AdminBackground, AdminTable, AdminChange, AdminBody };

export default Styled;
