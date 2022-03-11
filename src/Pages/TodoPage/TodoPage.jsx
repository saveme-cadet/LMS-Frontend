import { useState, useEffect } from 'react';
import Styled from './TodoPage.styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue, red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

const ProgressBar = props => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <CircularProgress
        variant="determinate"
        {...props}
        style={{
          width: 100,
          height: 100,
        }}
      />
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
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          style={{
            fontSize: 30,
          }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

function TodoPage() {
  const [newToDo, setNewToDo] = useState({
    number: 0,
    content: '',
    checked: false,
  });
  const [ongoing, setOngoing] = useState([]);
  const [finished, setFinished] = useState([]);
  const [id, setId] = useState(0);
  const [process, setProcess] = useState(0);
  const onSubmit = event => {
    event.preventDefault();
    if (newToDo.content === '') {
      return;
    }
    setOngoing(currentArray => [...currentArray, newToDo]);
    setId(current => current + 1);
    setNewToDo({
      id: 0,
      content: '',
      checked: false,
    });
  };
  const onChange = event => {
    setNewToDo({
      id: id,
      content: event.target.value,
      checked: false,
    });
  };
  const changeToFinished = event => {
    if (
      ongoing.find(
        ongoing =>
          parseInt(event.target.nextSibling.nextSibling.id) === ongoing.id,
      ).checked === false
    ) {
      ongoing.find(
        ongoing =>
          parseInt(event.target.nextSibling.nextSibling.id) === ongoing.id,
      ).checked = true;
      setFinished(currentArray => [
        ...currentArray,
        ongoing.find(
          ongoing =>
            parseInt(event.target.nextSibling.nextSibling.id) === ongoing.id,
        ),
      ]);
      setOngoing(
        ongoing.filter(
          ongoing =>
            parseInt(event.target.nextSibling.nextSibling.id) !== ongoing.id,
        ),
      );
    }
  };
  const changeToOngoing = event => {
    if (
      finished.find(
        finished =>
          parseInt(event.target.nextSibling.nextSibling.id) === finished.id,
      ).checked === true
    ) {
      finished.find(
        finished =>
          parseInt(event.target.nextSibling.nextSibling.id) === finished.id,
      ).checked = false;
      setOngoing(currentArray => [
        ...currentArray,
        finished.find(
          finished =>
            parseInt(event.target.nextSibling.nextSibling.id) === finished.id,
        ),
      ]);
      setFinished(
        finished.filter(
          finished =>
            parseInt(event.target.nextSibling.nextSibling.id) !== finished.id,
        ),
      );
    }
  };
  const deleteOngoing = event => {
    setOngoing(
      ongoing.filter(
        ongoing => parseInt(event.target.nextSibling.id) !== ongoing.id,
      ),
    );
  };
  const deleteFinished = event => {
    setFinished(
      finished.filter(
        finished => parseInt(event.target.nextSibling.id) !== finished.id,
      ),
    );
  };
  useEffect(() => {
    const total = ongoing.length + finished.length;
    if (total === 0) {
      setProcess(0);
      return;
    }
    console.log('ongoing', ongoing);
    console.log('finished', finished);
    setProcess(((finished.length / total) * 100).toFixed(0));
  }, [ongoing, finished]);

  return (
    <Container maxWidth="90%">
      <Box sx={{ height: '100vh' }}>
        <h1>To-Do List</h1>
        <br />
        <div>
          <form onSubmit={onSubmit}>
            <TextField
              style={{
                width: 500,
              }}
              onChange={onChange}
              value={newToDo.content}
              type="text"
              placeholder="오늘 할 일을 입력하세요."
            />
            <Button
              style={{
                height: 55,
              }}
              variant="contained"
              onClick={onSubmit}
            >
              추가
            </Button>
          </form>
          {/* <h1>진척도 : {process} %</h1> */}
          <ProgressBar value={process} />
          <Styled.CusDiv>
            <br />
            <Box
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}
            >
              <ul>
                <h2>진행 중</h2>
                {ongoing.map((item, index) => (
                  <div key={index}>
                    <Button variant="contained" onClick={changeToFinished}>
                      체크
                    </Button>
                    <Button variant="outlined" onClick={deleteOngoing}>
                      삭제
                    </Button>
                    {item.checked === false ? (
                      <ListItem disablePadding id={item.id}>
                        <ListItemButton>
                          <ListItemText primary={item.content} />
                        </ListItemButton>
                      </ListItem>
                    ) : (
                      <ListItem
                        disablePadding
                        id={item.id}
                        style={{
                          textDecorationLine: 'line-through',
                          color: 'gray',
                        }}
                      >
                        <ListItemButton>
                          <ListItemText primary={item.content} />
                        </ListItemButton>
                      </ListItem>
                    )}
                  </div>
                ))}
              </ul>
            </Box>
            <br />
            <Box
              sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
              }}
            >
              <ul>
                <h2>완료</h2>
                {finished.map((item, index) => (
                  <div key={index}>
                    <Button variant="contained" onClick={changeToOngoing}>
                      체크
                    </Button>
                    <Button variant="outlined" onClick={deleteFinished}>
                      삭제
                    </Button>
                    {item.checked === false ? (
                      <ListItem disablePadding id={item.id}>
                        <ListItemButton>
                          <ListItemText primary={item.content} />
                        </ListItemButton>
                      </ListItem>
                    ) : (
                      <ListItem
                        disablePadding
                        id={item.id}
                        style={{
                          textDecorationLine: 'line-through',
                          color: 'gray',
                        }}
                      >
                        <ListItemButton>
                          <ListItemText primary={item.content} />
                        </ListItemButton>
                      </ListItem>
                    )}
                  </div>
                ))}
              </ul>
            </Box>
          </Styled.CusDiv>
        </div>
      </Box>
    </Container>
  );
}

export default TodoPage;
