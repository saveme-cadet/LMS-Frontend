import Styled from 'styled-components';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const TodoProgress = ({ total, checked }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  let proportion = 0;
  if (total === 0 && checked === 0) {
    proportion = 0;
  } else proportion = (checked / total) * 100;

  return (
    <ProgressBody>
      <Typography
        variant="caption"
        component="div"
        color="text.secondary"
        style={{
          fontSize: '20px',
          width: '97%',
          textAlign: 'right',
          marginBottom: '10px',
        }}
      >
        {checked} / {total}
      </Typography>
      <BorderLinearProgress
        variant="determinate"
        value={parseInt(proportion.toFixed(0))}
      />
    </ProgressBody>
  );
};

const ProgressBody = Styled.div`
  width: 90%;
  margin-left: 5%;
  margin-bottom: 5%;
`;

export default TodoProgress;
