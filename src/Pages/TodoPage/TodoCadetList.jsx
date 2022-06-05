import styled from 'styled-components';

import Checkbox from '@mui/material/Checkbox';

const TodoCadetList = ({ item }) => {
  const WarningSignNoList = () => {
    return (
      <WarningSignList>
        <span style={{ color: 'gray' }}>등록된 할 일이 없습니다!</span>
      </WarningSignList>
    );
  };

  const CadetListCheckbox = ({ list }) => {
    return (
      <CadetListCheckboxes>
        <Checkbox
          checked={list.titleCheck}
          size="small"
          sx={{
            '& .MuiSvgIcon-root': { fontSize: 15 },
          }}
          disabled
        />
      </CadetListCheckboxes>
    );
  };

  const CadetListItem = ({ list }) => {
    return (
      <span>
        {list.titleCheck === true ? (
          <span
            style={{
              textDecorationLine: 'line-through',
              color: 'gray',
            }}
          >
            {list.title}
          </span>
        ) : (
          <span>{list.title}</span>
        )}
      </span>
    );
  };

  return (
    <TodoCadetListBody>
      {item.todoDtoList.length === 0 ? (
        <WarningSignNoList />
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
const WarningSignList = styled.div`
  text-align: center;
  // vertical-align: middle;
  margin-top: 80px;
  margin-left: -5%;
`;
const CadetListCheckboxes = styled.span`
  margin-left: -10px;
  margin-bottom: -5px;
`;

export default TodoCadetList;
