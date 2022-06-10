import styled from 'styled-components';

const WarningNoList = () => {
  return (
    <WarningSignList>
      <span style={{ color: 'gray' }}>등록된 할 일이 없습니다!</span>
    </WarningSignList>
  );
};

const WarningSignList = styled.div`
  text-align: center;
  // vertical-align: middle;
  margin-top: 80px;
  margin-left: -5%;
`;

export default WarningNoList;
