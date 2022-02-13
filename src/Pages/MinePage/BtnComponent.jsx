import * as React from 'react';
import { useState } from 'react';

const BtnComponent = props => {
  return (
    <div>
      {props.status === 0 ? (
        <div>
          <button onClick={props.start}>Start</button>
        </div>
      ) : (
        ''
      )}
      {props.status === 1 ? (
        <div>
          <button onClick={props.pause}>Pause</button>
          <button onClick={props.reset} disabled={props.isPaused}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
      {props.status === 2 ? (
        <div>
          <button onClick={props.resume}>Resume</button>
          <button onClick={props.reset} disabled={props.isPaused}>
            Reset
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default BtnComponent;
