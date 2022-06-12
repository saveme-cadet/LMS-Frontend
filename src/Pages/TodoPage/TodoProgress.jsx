import Progress from './Progress';

import styled from 'styled-components';

const TodoProgress = ({ total, checked }) => {
  return (
    <ProgressBody>
      <Progress total={total} checked={checked} />
    </ProgressBody>
  );
};

const ProgressBody = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-bottom: 5%;
`;

export default TodoProgress;
