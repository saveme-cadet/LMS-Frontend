import { getMessage } from 'Utils';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

import styled from 'styled-components';

const NotValid = ({ code }) => {
  return (
    <NotValidContainer>
      <WarningAmberRoundedIcon sx={{ fontSize: 500 }} />
      <h2>{getMessage(code)}</h2>
    </NotValidContainer>
  );
};

export default NotValid;

const NotValidContainer = styled.div`
  font-size: 30px;
  text-align: center;
  color: #c0c0c0;
`;
