import { useState } from 'react';

import styled from 'styled-components';

const ItemInput = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  return (
    <TodoEditItemInput
      id="name"
      autoFocus
      autoComplete="off"
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
  outline-width: 0;
  font-size: 15px;
`;

export default ItemInput;
