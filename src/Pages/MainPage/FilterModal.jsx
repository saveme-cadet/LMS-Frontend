import styled from 'styled-components';

const filterArrays = [
  { label: '팀', index: 0 },
  { label: '역할', index: 1 },
  { label: '출석', index: 3 },
  { label: '결석', index: 4 },
  { label: '휴가', index: 5 },
  { label: '목표', index: 8 },
];

const FilterModal = ({ customData, onClickToggleCustom }) => {
  return (
    <FilterModalContainer>
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
    </FilterModalContainer>
  );
};

export default FilterModal;

const CustomColumn = styled.span`
  background-color: ${props => (props.isShow ? 'white' : 'gray')};

  min-width: 80px;
  height: 40px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const FilterModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(216, 216, 216, 0.9);
`;
