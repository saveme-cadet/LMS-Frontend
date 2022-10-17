import { color, lineThrough } from 'Utils/TodoCss';
import Checkbox from '@mui/material/Checkbox';

import styled from 'styled-components';

const TodoCadetList = ({ item, date }) => {
  const today = new Date();
  return (
    <TodoCadetListBody>
      {item.todoDtoList.length === 0 ? (
        <WarningNoList>등록된 할 일이 없습니다!</WarningNoList>
      ) : (
        <TodoCadetListContainer>
          {item.todoDtoList.map((list, index) => (
            <TodoCadetListEntity key={index}>
              <Checkbox
                checked={list.titleCheck}
                className="checkbox"
                size="small"
                sx={{
                  '& .MuiSvgIcon-root': { fontSize: 15 },
                }}
                disabled
              />
              <CadetListItem list={list} today={today} date={date}>
                {list.title.replace(/ /g, '\u00a0')}
              </CadetListItem>
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
const WarningNoList = styled.div`
  text-align: center;
  // vertical-align: middle;
  margin-top: 80px;
  margin-left: -5%;
  color: grey;
`;
const TodoCadetListContainer = styled.div``;
const TodoCadetListEntity = styled.div`
  display: table;
  .checkbox {
    margin-left: -10px;
    margin-bottom: -5px;
  }
`;
const CadetListItem = styled.span`
  color: ${props => color(props, props.list.titleCheck)};
  text-decoration-line: ${props => lineThrough(props.list.titleCheck)};
`;

export default TodoCadetList;
