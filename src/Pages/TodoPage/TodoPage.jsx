
import { ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';

const TodoPage = () => {
  const [toDo, setToDo] = useState({
    number : 0,
    content : "",
    checked : "false",
});
  const [toDos, setToDos] = useState([]);
  const [number, setNumber] = useState(0);
  const onSubmit = (event) => {
      event.preventDefault();
    if (toDo.content === "") {
      return ;
    };
    setToDos((currentArray) => [toDo, ...currentArray]);
    setNumber((current) => current + 1);
    setToDo({
      number : 0,
      content : "",
      checked : "false",
    });
  };
  const onChange = (event) => {
    setToDo({
      number : number,
      content : event.target.value,
      checked : "false",
    });
  };
  const alterCheck = (event) => {
    if (toDos.find((toDo) => parseInt(event.target.nextSibling.id) !== toDo.number).checked === "false") {
      toDos.find((toDo) => parseInt(event.target.nextSibling.id) !== toDo.number).checked = "true";
    }
    else if (toDos.find((toDo) => parseInt(event.target.nextSibling.id) !== toDo.number).checked === "true") {
      toDos.find((toDo) => parseInt(event.target.nextSibling.id) !== toDo.number).checked = "false";
    }
  }
  const deleteToDo = (event) => {
    setToDos(toDos.filter((toDo) => parseInt(event.target.nextSibling.id) !== toDo.number));
  };
  return (

<Container maxWidth="90%">
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
    <h1>To-Do List</h1>
    <div>
      <form onClick={onSubmit}>
        <input onChange={onChange} value={toDo.content} type="text" placeholder="오늘 할 일을 입력하세요."/>
        <button>추가</button>
      </form><br />
       <ul>
         {toDos.map((item, index) => (
           <div key={index}>
            <li key={index}>
              <button onClick={alterCheck}>✔️</button>
              <button onClick={deleteToDo}>❌</button>
              <span id={item.number} >{item.content}</span>
            </li>
          </div>
           ))}
       </ul>
    </div>
  </Box>
</Container>

  );
};

export default TodoPage;
