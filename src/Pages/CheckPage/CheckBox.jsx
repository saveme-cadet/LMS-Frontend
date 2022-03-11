import { getCheckMessage } from 'Utils';

import Divider from '@mui/material/Divider';

const CheckBox = ({ checkArray, setWhich }) => {
  return (
    <div className="check-box">
      <div onClick={() => setWhich(0)}>
        <h1>체크인</h1>
        <Divider />
        {getCheckMessage(checkArray[0])}
      </div>
      <div onClick={() => setWhich(1)}>
        <h1>체크아웃</h1>
        <Divider />

        {getCheckMessage(checkArray[1])}
      </div>
    </div>
  );
};

export default CheckBox;
