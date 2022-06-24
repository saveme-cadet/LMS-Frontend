import styled from 'styled-components';

const filterArrays = [
  { label: '팀', index: 0 },
  { label: '역할', index: 1 },
  { label: '출석', index: 3 },
  { label: '결석', index: 4 },
  { label: '휴가', index: 5 },
  { label: '목표', index: 8 },
];

const FilterModal = ({ customData, onClickToggleCustom, setIsOpen }) => {
  const onClickClose = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <FilterModalContainer>
      <FilterModalBody>
        <h1>출결 테이블 칼럼 필터링</h1>

        {filterArrays.map((array, i) => {
          return (
            <CustomColumn
              key={i}
              isShow={customData[array.index]}
              onClick={() => onClickToggleCustom(array.label)}
            >
              {array.label}
            </CustomColumn>
          );
        })}
        <FilterModalFooter onClick={onClickClose}>닫기</FilterModalFooter>
      </FilterModalBody>
    </FilterModalContainer>
  );
};

export default FilterModal;

const FilterModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(216, 216, 216, 0.5);
`;

const FilterModalBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  justify-content: center;

  background: white;
  border-radius: 20px;
  padding: 20px;
`;

const FilterModalFooter = styled.div`
  width: 100px;
  height: 60px;

  margin: 40px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  font-size: 30px;
  text-align: center;
  line-height: 60px;

  cursor: pointer;
`;
const CustomColumn = styled.div`
  background-color: ${props => (props.isShow ? 'white' : 'gray')};
  width: 100px;
  height: 100px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  font-size: 30px;
  text-align: center;
  line-height: 100px;

  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;
