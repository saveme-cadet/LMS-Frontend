import WarningNoList from './WarningNoList';
import CadetListCheckbox from './CadetListCheckbox';
import CadetListItem from './CadetListItem';

import styled from 'styled-components';

const TodoCadetList = ({ item }) => {
  return (
    <TodoCadetListBody>
      {item.todoDtoList.length === 0 ? (
        <WarningNoList />
      ) : (
        <TodoCadetListContainer>
          {item.todoDtoList.map((list, index) => (
            <TodoCadetListEntity key={index}>
              <CadetListCheckbox list={list} />
              <CadetListItem list={list} />
            </TodoCadetListEntity>
          ))}
        </TodoCadetListContainer>
      )}
    </TodoCadetListBody>
  );
};

const TodoCadetListBody = styled.div`
  overflow: auto;
  margin-top: 5%;
  margin-left: 5%;
  height: 80%;
`;
const TodoCadetListContainer = styled.div``;
const TodoCadetListEntity = styled.div`
  display: table;
`;

export default TodoCadetList;
