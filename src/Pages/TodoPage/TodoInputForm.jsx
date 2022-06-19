import { format } from 'date-fns';

import styled from 'styled-components';

const TodoInputForm = ({ onSubmit, onChange, toDo, date }) => {
  const today = new Date();

  return (
    <InputFormBody onSubmit={onSubmit}>
      <InputFormContainer>
        <InputFormInput
          onChange={onChange}
          value={toDo.content}
          type="text"
          placeholder="오늘 할 일을 입력하세요."
          autoFocus
        />
        <InputFormButton
          variant="contained"
          onClick={onSubmit}
          disabled={format(today, 'yyyy-MM-dd') !== format(date, 'yyyy-MM-dd')}
        >
          추가
        </InputFormButton>
      </InputFormContainer>
    </InputFormBody>
  );
};

const InputFormBody = styled.form``;

const InputFormContainer = styled.div`
  width: 100%;
`;
const InputFormInput = styled.input`
  border: 0px;
  border-bottom: 3px solid #c0c0c0;
  margin-top: 30px;
  font-size: 17px;
  height: 35px;
  width: calc(100% - 80px);
  text-align: center;
`;
const InputFormButton = styled.button`
  border-radius: 5px;
  margin-left: 15px;
  width: 60px;
  height: 40px;
  font-size: 17px;
  background-color: transparent;
  cursor: pointer;
`;

export default TodoInputForm;
