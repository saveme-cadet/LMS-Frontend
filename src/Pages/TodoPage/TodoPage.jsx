import { ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import { blue, red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

// //1. 현재처럼 하나의 배열로 구현하기

// function TodoPage() {
//   const [toDo, setToDo] = useState({
//     number : 0,
//     content : "",
//     checked : false,
// });
//   const [toDos, setToDos] = useState([]);
//   const [number, setNumber] = useState(0);
//   const onSubmit = (event) => {
//       event.preventDefault();              //refresh 방지
//     if (toDo.content === "") {             //empty input 방지
//       return ;
//     };
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setNumber((current) => current + 1);
//     setToDo({
//       number : 0,
//       content : "",
//       checked : false,
//     });
//   };
//   const onChange = (event) => {
//     setToDo({
//       number : number,
//       content : event.target.value,
//       checked : false,
//     });
//   };
//   const alterCheck = (event) => {
//     if (toDos.find((toDo) => parseInt(event.target.nextSibling.nextSibling.id) === toDo.number).checked === false) {
//       toDos.find((toDo) => parseInt(event.target.nextSibling.nextSibling.id) === toDo.number).checked = true;
//     }
//     else if (toDos.find((toDo) => parseInt(event.target.nextSibling.nextSibling.id) === toDo.number).checked === true) {
//       toDos.find((toDo) => parseInt(event.target.nextSibling.nextSibling.id) === toDo.number).checked = false;
//     }
//     setToDos([...toDos]); //re-rendering
//   }
//   const deleteToDo = (event) => {
//     setToDos(toDos.filter((toDo) => parseInt(event.target.nextSibling.id) !== toDo.number));
//   };
//   useEffect(() => {console.log(toDos)}, [toDos]);
//   return (

// <Container maxWidth="90%">
//   <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
//     <h1>To-Do List</h1>
//     <div>
//       <form onClick={onSubmit}>
//         <input onChange={onChange} value={toDo.content} type="text" placeholder="오늘 할 일을 입력하세요."/>
//         <button>추가</button>
//       </form><br />
//        <ul>
//          {toDos.map((item, index) => (
//            <div key={index}>
//             <li key={index}>
//               <button onClick={alterCheck}>✔️</button>
//               <button onClick={deleteToDo}>❌</button>
//               {item.checked === false ? 
//               (<span id={item.number}>{item.content}</span>) :
//               (<span id={item.number} style={{
//                 textDecorationLine : 'line-through',
//                 color : 'gray',
//               }}>{item.content}</span>) }
//             </li>
//           </div>
//            ))}
//        </ul>
//     </div>
//   </Box>
// </Container>

//   );
// };

//2. 두 개의 배열로 구현하기(완료, 미완료)

function TodoPage() {
  const [newToDo, setNewToDo] = useState({
    number : 0,
    content : "",
    checked : false,
});
  const [ongoing, setOngoing] = useState([]);
  const [finished, setFinished] = useState([]);
  const [id, setId] = useState(0);
  const onSubmit = (event) => {
      event.preventDefault();
    if (newToDo.content === "") {
      return ;
    };
    setOngoing((currentArray) => [...currentArray, newToDo]);
    setId((current) => current + 1);
    setNewToDo({
      id : 0,
      content : "",
      checked : false,
    });
  };
  const onChange = (event) => {
    setNewToDo({
      id : id,
      content : event.target.value,
      checked : false,
    });
  };
  const changeToFinished = (event) => {
    if (ongoing.find((ongoing) => parseInt(event.target.nextSibling.nextSibling.id) === ongoing.id).checked === false) {
      ongoing.find((ongoing) => parseInt(event.target.nextSibling.nextSibling.id) === ongoing.id).checked = true;
      setFinished((currentArray) => [...currentArray, ongoing.find((ongoing) => parseInt(event.target.nextSibling.nextSibling.id) === ongoing.id)]);  
      setOngoing(ongoing.filter((ongoing) => parseInt(event.target.nextSibling.nextSibling.id) !== ongoing.id));
    }
  };
  const changeToOngoing = (event) => {
    if (finished.find((finished) => parseInt(event.target.nextSibling.nextSibling.id) === finished.id).checked === true) {
      finished.find((finished) => parseInt(event.target.nextSibling.nextSibling.id) === finished.id).checked = false;
      setOngoing((currentArray) => [...currentArray, finished.find((finished) => parseInt(event.target.nextSibling.nextSibling.id) === finished.id)]); 
      setFinished(finished.filter((finished) => parseInt(event.target.nextSibling.nextSibling.id) !== finished.id));
    }
  };
  const deleteOngoing = (event) => {
    setOngoing(ongoing.filter((ongoing) => parseInt(event.target.nextSibling.id) !== ongoing.id));
  };
  const deleteFinished = (event) => {
    setFinished(finished.filter((finished) => parseInt(event.target.nextSibling.id) !== finished.id));
  };
  useEffect(() => {console.log(ongoing)}, [ongoing]);
  useEffect(() => {console.log(finished)}, [finished]);
  return (

<Container maxWidth="90%">
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
    <h1>To-Do List</h1>
    <div>
      <form onClick={onSubmit}>
        <input onChange={onChange} value={newToDo.content} type="text" placeholder="오늘 할 일을 입력하세요."/>
        <button>추가</button>
      </form><br />
       <ul>
         <h2>진행 중</h2>
         {ongoing.map((item, index) => (
           <div key={index}>
            <li key={index}>
              <button onClick={changeToFinished}>✔️</button>
              <button onClick={deleteOngoing}>❌</button>
              {item.checked === false ? 
              (<span id={item.id}>{item.content}</span>) :
              (<span id={item.id} style={{
                textDecorationLine : 'line-through',
                color : 'gray',
              }}>{item.content}</span>) }
            </li>
          </div>
           ))}
       </ul>
       <hr />
       <ul>
         <h2>완료</h2>
         {finished.map((item, index) => (
           <div key={index}>
            <li key={index}>
              <button onClick={changeToOngoing}>✔️</button>
              <button onClick={deleteFinished}>❌</button>
              {item.checked === false ? 
              (<span id={item.id}>{item.content}</span>) :
              (<span id={item.id} style={{
                textDecorationLine : 'line-through',
                color : 'gray',
              }}>{item.content}</span>) }
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
