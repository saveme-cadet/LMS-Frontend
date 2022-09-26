import isToday from 'Utils/isToday';

import TodoEditForm from './TodoEditForm';
import TodoListEach from './TodoListEach';

import styled from 'styled-components';

const TodoList = ({
  toDos,
  date,
  changeCheck,
  removeToDo,
  isEdit,
  setIsEdit,
  getToDos,
  userId,
}) => {
  const today = new Date();
  return (
    <TodoListBody>
      {toDos.map((item, index) =>
        index === isEdit && isToday(today, date) ? (
          <TodoListContainer key={index}>
            <TodoEditForm
              item={item}
              date={date}
              index={index}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              toDos={toDos}
              userId={userId}
              getToDos={getToDos}
            />
          </TodoListContainer>
        ) : (
          <TodoListContainer key={index}>
            <TodoListEach
              item={item}
              index={index}
              changeCheck={changeCheck}
              date={date}
              setIsEdit={setIsEdit}
              removeToDo={removeToDo}
            />
          </TodoListContainer>
        ),
      )}
    </TodoListBody>
  );
};

const TodoListBody = styled.div`
  height: 80%;
  margin-top: 2%;
  padding: 1% 3%;
  font-size: 15px;
  overflow: auto;
`;
const TodoListContainer = styled.div`
  display: table;
`;

export default TodoList;
