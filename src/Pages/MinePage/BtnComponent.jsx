import * as React from 'react';
import Button from '@mui/material/Button';

const BtnComponent = props => {
  return (
    <div>
      {props.status === 0 ? (
        <div>
          <Button
            style={{
              width: 100,
            }}
            onClick={props.start}
            variant="contained"
          >
            Start
          </Button>
        </div>
      ) : (
        ''
      )}
      {props.status === 1 ? (
        <div>
          <Button
            onClick={props.pause}
            variant="contained"
            style={{
              width: 100,
            }}
          >
            Pause
          </Button>
          <Button
            onClick={props.reset}
            disabled={props.isPaused}
            variant="outlined"
            style={{
              width: 100,
            }}
          >
            Reset
          </Button>
        </div>
      ) : (
        ''
      )}
      {props.status === 2 ? (
        <div>
          <Button
            onClick={props.resume}
            variant="contained"
            style={{
              width: 100,
            }}
          >
            Resume
          </Button>
          <Button
            onClick={props.reset}
            disabled={props.isPaused}
            variant="outlined"
            style={{
              width: 100,
            }}
          >
            Reset
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default BtnComponent;
