import { useState, useEffect } from 'react';
import Styled from './TodoPage.styled';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Container from '@mui/material/Container';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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

function TodoPage() {
  const [toDo, setToDo] = useState({
    number: 0,
    content: '',
    checked: false,
  });
  const [toDos, setToDos] = useState([]);
  const [number, setNumber] = useState(0);
  const [checked, setChecked] = useState(0);
  const [total, setTotal] = useState(0);

  const onSubmit = event => {
    event.preventDefault(); //refresh 방지
    if (toDo.content === '') {
      //empty input 방지
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setNumber(current => current + 1);
    setToDo({
      number: 0,
      content: '',
      checked: false,
    });
  };
  const onChange = event => {
    setToDo({
      number: number,
      content: event.target.value,
      checked: false,
    });
  };
  const alterCheck = event => {
    // console.log(event.target.parentElement.nextSibling);
    if (
      toDos.find(
        toDo =>
          parseInt(event.target.parentElement.nextSibling.id) === toDo.number,
      ).checked === false
    ) {
      toDos.find(
        toDo =>
          parseInt(event.target.parentElement.nextSibling.id) === toDo.number,
      ).checked = true;
    } else if (
      toDos.find(
        toDo =>
          parseInt(event.target.parentElement.nextSibling.id) === toDo.number,
      ).checked === true
    ) {
      toDos.find(
        toDo =>
          parseInt(event.target.parentElement.nextSibling.id) === toDo.number,
      ).checked = false;
    }
    setToDos([...toDos]); //re-rendering
  };

  const deleteToDo = event => {
    if (event.target.tagName === 'BUTTON') {
      // console.log('button');
      setToDos(
        toDos.filter(
          toDo => parseInt(event.target.previousSibling.id) !== toDo.number,
        ),
      );
    } else if (event.target.tagName === 'svg') {
      // console.log('svg');
      setToDos(
        toDos.filter(
          toDo =>
            parseInt(event.target.parentElement.previousSibling.id) !==
            toDo.number,
        ),
      );
    } else if (event.target.tagName === 'path') {
      // console.log('path');
      setToDos(
        toDos.filter(
          toDo =>
            parseInt(
              event.target.parentElement.parentElement.previousSibling.id,
            ) !== toDo.number,
        ),
      );
    }
  };

  // useEffect(() => {
  //   console.log(toDos);
  // }, [toDos]);

  useEffect(() => {
    const total = toDos.length;
    if (total === 0) {
      setTotal(0);
      setChecked(0);
      return;
    }
    let checked = 0;
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].checked === true) checked++;
    }
    console.log(toDos);
    setTotal(total);
    setChecked(checked);
  }, [toDos]);

  return (
    <Styled.CusDiv
      maxWidth="90%"
      sx={{
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexDirection: 'column',
          // display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          border: 1,
          borderColor: '#C0C0C0',
          boxShadow: 1,
          borderRadius: 5,
          // minWidth: '40%',
          maxWidth: '100%',
          minHeight: 780,
        }}
      >
        <div style={{ minHeight: 700 }}>
          <form onSubmit={onSubmit}>
            <div>
              <TextField
                style={{
                  width: 500,
                  // fontSize: 12,
                }}
                onChange={onChange}
                value={toDo.content}
                type="text"
                placeholder="오늘 할 일을 입력하세요."
              />
              &nbsp;
              <Button
                style={{
                  width: 100,
                  height: 55,
                  fontSize: 15,
                }}
                variant="contained"
                onClick={onSubmit}
              >
                추가
              </Button>
            </div>
          </form>
          <ul>
            {toDos.map((item, index) => (
              <div key={index}>
                <div key={index}>
                  <Checkbox onClick={alterCheck} checked={item.checked} />
                  {item.checked === false ? (
                    <span style={{ fontSize: 20 }} id={item.number}>
                      {item.content}
                    </span>
                  ) : (
                    <span
                      id={item.number}
                      style={{
                        textDecorationLine: 'line-through',
                        color: 'gray',
                        fontSize: 20,
                      }}
                    >
                      {item.content}
                    </span>
                  )}
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={deleteToDo}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <ProgressBar style={{ width: 100 }} total={total} checked={checked} />
        </div>
      </Box>
      <Box
        sx={{
          flexDirection: 'column',
          // display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
          border: 1,
          borderColor: '#C0C0C0',
          boxShadow: 1,
          borderRadius: 5,
          // minWidth: '40%',
          maxWidth: '100%',
          minHeight: 780,
        }}
      >
        <span>👀 다른 카뎃 구경하기</span>
        {/* <Styled.CusDiv> */}

        <Box
          sx={{
            flexDirection: 'column',
            // display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            border: 1,
            borderColor: '#C0C0C0',
            boxShadow: 1,
            borderRadius: 5,
            // minWidth: '40%',
            maxWidth: '48%',
            minHeight: 340,
          }}
        ></Box>
        <br />
        <Box
          sx={{
            flexDirection: 'column',
            // display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            border: 1,
            borderColor: '#C0C0C0',
            boxShadow: 1,
            borderRadius: 5,
            // minWidth: '40%',
            maxWidth: '48%',
            minHeight: 340,
          }}
        ></Box>
        {/* </Styled.CusDiv> */}
      </Box>
    </Styled.CusDiv>
  );
}
export default TodoPage;
