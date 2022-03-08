import * as React from 'react';
import Timer from './Timer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Child = ({ number, array }) => {
  useEffect(() => {
    console.log('child change');
  });
  return (
    <div>
      num : {number}
      {array.map((e, i) => {
        return <div key={i}>temp</div>;
      })}
    </div>
  );
};

const MinePage = () => {
<<<<<<< HEAD
  return (
    <Container maxWidth="90%">
      <Box sx={{ height: '100vh' }}>
        <Timer />
      </Box>
    </Container>
=======
  const [stateNum, setStateNum] = useState(0);
  const [array, setArray] = useState(['str']);
  let normalNum = 0;

  useEffect(() => {
    console.log('parent change');
    console.log('array :', array);
    return () => {
      console.log('before change');
    };
  }, []);
  const handleNormal = () => {
    normalNum++;
    console.log(normalNum);
  };
  const handleState = useMemo(
    () => () => {
      console.log(stateNum);
      console.log(array);
      setStateNum(prev => prev + 1);
      setArray(prev => {
        return ['str', ...prev];
      });
    },
    [stateNum],
  );

  return (
    <div>
      <Button onClick={handleNormal}>일반 증가</Button>
      <Button onClick={handleState}>state 증가</Button>
      <Child number={stateNum} array={array} />
      nor : {normalNum}
    </div>
>>>>>>> origin/dev
  );
};

export default MinePage;
