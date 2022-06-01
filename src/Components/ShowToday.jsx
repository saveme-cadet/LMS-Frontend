import { format } from 'date-fns';
import { getDayName } from 'Utils';

import styled from 'styled-components';

const ShowToday = ({ date }) => {
  return (
    <ShowTodayContainer>
      {format(date, 'yyyy/MM/dd')} {getDayName(date.getDay())}
    </ShowTodayContainer>
  );
};

export default ShowToday;

const ShowTodayContainer = styled.div`
  align-items: center;
  justify-content: center;

  font-size: 40px;
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
`;
