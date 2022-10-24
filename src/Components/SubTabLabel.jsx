import React from 'react';
import styled from 'styled-components';

const SubTabLabel = ({ title }) => {
  return (
    <>
      <SubTabTitle>{title}</SubTabTitle>
    </>
  );
};
const SubTabTitle = styled.div`
  font-family: 'BMJUA';
  font-size: medium;
  color: white;
`;

export default SubTabLabel;
