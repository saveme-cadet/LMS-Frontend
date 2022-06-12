import Styled from 'styled-components';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Progress = props => {
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
  if (props.total === 0 && props.checked === 0) {
    proportion = 0;
  } else proportion = (props.checked / props.total) * 100;

  return (
    <ProgressBody>
      <ProgressRatio>
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
          {props.checked} / {props.total}
        </Typography>
      </ProgressRatio>
      <ProgressBar>
        <BorderLinearProgress
          variant="determinate"
          value={proportion.toFixed(0)}
        />
      </ProgressBar>
    </ProgressBody>
  );
};

const ProgressBody = Styled.div`
`;
const ProgressRatio = Styled.div`
`;
const ProgressBar = Styled.div`
`;

export default Progress;
