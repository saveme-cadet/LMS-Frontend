import * as React from 'react';
import Styled from './Timer.styled';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { Portal } from '@mui/material';

const ProgressBar = ({
  seconds,
  DigitalText,
  start,
  status,
  pause,
  resume,
}) => {
  let PROGRESS_COLOR;
  if (0 <= seconds && seconds <= 60 * 30 * 2) PROGRESS_COLOR = '#AED6F1';
  else if (60 * 30 * 2 < seconds && seconds <= 60 * 30 * 4)
    PROGRESS_COLOR = '#85C1E9';
  else if (60 * 30 * 4 < seconds && seconds <= 60 * 30 * 6)
    PROGRESS_COLOR = '#5DADE2';
  else if (60 * 30 * 6 < seconds && seconds <= 60 * 30 * 8)
    PROGRESS_COLOR = '#3498DB';
  else if (60 * 30 * 8 < seconds && seconds <= 60 * 30 * 10)
    PROGRESS_COLOR = '#2E86C1';
  else if (60 * 30 * 10 < seconds && seconds <= 60 * 30 * 12)
    PROGRESS_COLOR = '#2874A6';
  else if (60 * 30 * 12 < seconds && seconds <= 60 * 30 * 14)
    PROGRESS_COLOR = '#21618C';
  else if (60 * 30 * 14 < seconds) PROGRESS_COLOR = '#1B4F72';

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <CircularProgress
        color="primary"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: PROGRESS_COLOR, //color code : https://htmlcolorcodes.com/
        }}
        variant="determinate"
        value={(seconds / (60 * 30)) * 100}
        style={{
          width: 500,
          height: 500,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          flexDirection: 'column',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Styled.DigitDiv>
          <DigitalText />
        </Styled.DigitDiv>
        <br />
        <div>
          {status === '0' ? (
            <div>
              <Button
                style={{
                  width: 100,
                }}
                onClick={start}
                variant="contained"
              >
                Start
              </Button>
            </div>
          ) : (
            ''
          )}
          {status === '1' ? (
            <div>
              <Button
                onClick={pause}
                variant="outlined"
                style={{
                  width: 100,
                }}
              >
                Pause
              </Button>
            </div>
          ) : (
            ''
          )}
          {status === '2' ? (
            <div>
              <Button
                onClick={resume}
                variant="contained"
                style={{
                  width: 100,
                }}
              >
                Resume
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
      </Box>
    </Box>
  );
};

const DisplayComponent = props => {
  let SECONDS_STATUS;
  if (props.status === '1') {
    SECONDS_STATUS = props.difference;
  } else {
    SECONDS_STATUS = props.savedSeconds;
  }
  const milliSecond = SECONDS_STATUS % 100;
  const second = Math.floor(SECONDS_STATUS / 100) % 60;
  const minute = Math.floor(SECONDS_STATUS / 100 / 60) % 60;
  const hour = Math.floor(SECONDS_STATUS / 100 / 60 / 60);
  const propsSecond = Math.floor(SECONDS_STATUS / 100);

  const DigitalText = () => {
    return (
      <Box>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 80,
            }}
          >
            {hour >= 10 ? hour : '0' + hour}:
            {minute >= 10 ? minute : '0' + minute}:
            {second >= 10 ? second : '0' + second}
          </span>
          <span
            style={{
              fontSize: 40,
            }}
          >
            {milliSecond >= 10 ? milliSecond : '0' + milliSecond}
          </span>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ProgressBar
        seconds={propsSecond}
        DigitalText={DigitalText}
        start={props.start}
        status={props.status}
        pause={props.pause}
        resume={props.resume}
      />
      <Box
        style={{
          fontSize: 30,
        }}
      >
        <br />
        <span>
          ⛏오늘 차감된 출결 점수⛏ : -{(propsSecond / (3600 * 8)).toFixed(2)}
        </span>
      </Box>
    </Box>
  );
};

export default DisplayComponent;
