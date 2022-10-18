import WrongDay from './WrongDay';

import styled from 'styled-components';

const WarningNotVaildDate = ({ date, checkDateTodo }) => {
  return (
    <WarningSignDate>
      <WrongDay wrongType={checkDateTodo(date)} />
    </WarningSignDate>
  );
};

const WarningSignDate = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #c0c0c0;
  padding: 10px;
  border-radius: 1em;
  margin-right: 50px;
  height: 100%;
`;

export default WarningNotVaildDate;
