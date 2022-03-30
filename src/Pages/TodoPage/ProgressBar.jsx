import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

const ProgressBar = props => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
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
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 500,
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{
            fontSize: 30,
            width: 100,
          }}
        >
          {props.checked} / {props.total}
        </Typography>
        <BorderLinearProgress
          style={{ width: 300 }}
          variant="determinate"
          value={proportion.toFixed(0)}
        />
      </Box>
    </Box>
  );
};

export default ProgressBar;
