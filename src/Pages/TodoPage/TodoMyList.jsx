import { format } from 'date-fns';

import TodoEditForm from './TodoEditForm';
import TodoListEach from './TodoListEach';

import styled from 'styled-components';

const TodoMyList = ({
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
    <TodoMyListBody>
      {toDos.map((item, index) =>
        index === isEdit &&
        format(today, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd') ? (
          <TodoMyListContainer key={index}>
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
          </TodoMyListContainer>
        ) : (
          <TodoMyListContainer key={index}>
            <TodoListEach
              item={item}
              index={index}
              changeCheck={changeCheck}
              date={date}
              setIsEdit={setIsEdit}
              removeToDo={removeToDo}
            />
          </TodoMyListContainer>
        ),
      )}
    </TodoMyListBody>
  );
};

const TodoMyListBody = styled.div`
  height: 80%;
  margin-top: 2%;
  padding: 1% 3%;
  font-size: 15px;
  overflow: auto;
`;
const TodoMyListContainer = styled.div`
  display: table;
`;

export default TodoMyList;
