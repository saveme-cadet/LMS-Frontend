import { format } from 'date-fns';
import { getDayName } from 'Utils';

import styled from 'styled-components';
import { useEffect } from 'react';

const ShowDay = ({ date }) => {
  return (
    <ShowDayContainer>{format(date, 'yyyy년 MM월 dd일')}</ShowDayContainer>
  );
};

const ShowDayContainer = styled.span`
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
`;

export default ShowDay;
