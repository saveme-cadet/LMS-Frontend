import styled from 'styled-components';
import Box from '@mui/material/Box';

const CusDiv = styled.div`
  column-count: 1;
  // div {
  //   break-after: column;
  // }
`;
const Digit = styled.div`
  font-family: 'digital-7';
`;
const CusBox = styled(Box)`
  background: green;
`;

const Styled = {
  CusDiv,
  CusBox,
  Digit,
};
export default Styled;
