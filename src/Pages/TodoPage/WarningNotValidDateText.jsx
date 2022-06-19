import styled from 'styled-components';

const WarningNotVaildDateText = () => {
  return <WarningSignDate>아직 진행하지 않은 날짜입니다!</WarningSignDate>;
};

const WarningSignDate = styled.div`
  justify-content: center;
  align-item: center;
  text-align: center;
  margin-top: 43%;
  margin-bottom: 40%;
  color: grey;
`;

export default WarningNotVaildDateText;
