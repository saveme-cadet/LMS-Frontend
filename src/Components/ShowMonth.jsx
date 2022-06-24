import { format } from 'date-fns';
import { getDayName } from 'Utils';

import styled from 'styled-components';

const ShowMonth = ({ date }) => {
  return <ShowMonthContainer>{format(date, 'yyyy년 MM월')}</ShowMonthContainer>;
};

const ShowMonthContainer = styled.span`
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
`;

export default ShowMonth;
