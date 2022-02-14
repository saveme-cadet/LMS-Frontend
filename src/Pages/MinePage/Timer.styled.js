import styled from 'styled-components';
import Box from '@mui/material/Box';

const CusDiv = styled.div`
  column-count: 2;
  column-gap: 150px;
  ul {
    break-after: column;
  }
`;
const DigitDiv = styled.div`
  font-family: 'DSDIGI';
`;
const CusBox = styled(Box)`
  background: green;
`;

const Styled = {
  CusDiv,
  CusBox,
  DigitDiv,
};
export default Styled;
