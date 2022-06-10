import styled from 'styled-components';

const WarningNoList = () => {
  return (
    <WarningSignList>
      <span>등록된 할 일이 없습니다!</span>
    </WarningSignList>
  );
};

const WarningSignList = styled.div`
  text-align: center;
  // vertical-align: middle;
  margin-top: 80px;
  margin-left: -5%;
  color: grey;
`;

export default WarningNoList;
