import { useState } from 'react';
import { VACATION } from 'Utils/constants';

import styled from 'styled-components';

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const ModalAddVacationAll = ({
  setIsOpen,
  attendUser,
  addVacation,
  minusVacation,
}) => {
  const [value, setValue] = useState(0);
  // console.log('attend', attendUser);

  const handleCloseModal = isAccept => {
    if (isAccept && value) {
      let i = 0;
      attendUser.map(user => {
        // user.vacation 자료형 물어보기
        // 짧은 시간에 API 반복 요청 => 처리가 안되는 이슈
        if (value > VACATION.ZERO) addVacation(user.id, value);
        else if (value < VACATION.ZERO) minusVacation(user.id, -value);
      });
    }
    setIsOpen(false);
  };

  const onChangeVacation = event => {
    setValue(event.target.value);
  };
  return (
    <ModalAddVacationAllBody>
      <h1>일괄 휴가 변경</h1>
      <h3>참가 중인 모든 사용자들의 휴가를 증가하거나 감소합니다.</h3>
      <h3>얼마나 변경하시겠습니까?</h3>
      <h1>{value}일</h1>
      <Slider
        defaultValue={0}
        value={value}
        onChange={onChangeVacation}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={-0.5}
        max={3}
      />
      <Button onClick={() => handleCloseModal(true)}>확인</Button>
      <Button onClick={() => handleCloseModal(false)}>취소</Button>
    </ModalAddVacationAllBody>
  );
};

const ModalAddVacationAllBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(216, 216, 216, 0.9);
`;

export default ModalAddVacationAll;