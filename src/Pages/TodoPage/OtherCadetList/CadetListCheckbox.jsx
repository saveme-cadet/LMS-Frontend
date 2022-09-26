import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const CadetListCheckbox = ({ list }) => {
  return (
    <CadetListCheckboxes>
      <Checkbox
        checked={list.titleCheck}
        size="small"
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 15 },
        }}
        disabled
      />
    </CadetListCheckboxes>
  );
};

const CadetListCheckboxes = styled.span`
  margin-left: -10px;
  margin-bottom: -5px;
`;

export default CadetListCheckbox;
