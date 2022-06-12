import styled from 'styled-components';

const TodoCadetName = ({ index, item }) => {
  return <TodoCadetNames key={index}>{item.userName}</TodoCadetNames>;
};

const TodoCadetNames = styled.span`
  margin-top: -5px;
  font-size: 20px;
`;

export default TodoCadetName;
