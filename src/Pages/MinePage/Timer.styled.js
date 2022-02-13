import styled from 'styled-components';
import Box from '@mui/material/Box';

const CusDiv = styled.div`
  column-count: 2;
  column-gap: 150px;
  ul {
    break-after: column;
  }
`;

const CusBox = styled(Box)`
  background: green;
`;

const Styled = {
  CusDiv,
  CusBox,
};
export default Styled;
