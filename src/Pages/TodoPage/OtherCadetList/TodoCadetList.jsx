import isToday from 'Utils/isToday';

import CadetListCheckbox from './CadetListCheckbox';

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
              <CadetListCheckbox list={list} />
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
`;
const CadetListItem = styled.span`
  color: ${props =>
    !isToday(props.today, props.date) || props.list.titleCheck ? 'gray' : ''};
  text-decoration-line: ${props =>
    props.list.titleCheck ? 'line-through' : ''};
`;

export default TodoCadetList;
