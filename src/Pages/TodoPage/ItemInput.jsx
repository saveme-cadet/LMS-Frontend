import { useState } from 'react';

import styled from 'styled-components';

const ItemInput = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  return (
    <TodoEditItemInput
      value={title}
      onChange={event => {
        setTitle(event.target.value);
      }}
    />
  );
};

const TodoEditItemInput = styled.input`
  width: 300px;
  height: 20px;
  margin-left: 10px;
`;

export default ItemInput;
