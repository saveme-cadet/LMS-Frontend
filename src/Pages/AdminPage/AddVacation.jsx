import { useState } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const AddVacation = ({ setIsOpen, attendUser, addVacation, minusVacation }) => {
  const [value, setValue] = useState(0);
  // console.log('attend', attendUser);

  const handleCloseModal = isAccept => {
    if (isAccept && value) {
      let i = 0;
      while (i < value) {
        attendUser.map(user => {
          addVacation(user.id);
        });
        i += 0.5;
      }
      while (i > value) {
        attendUser.map(user => {
          minusVacation(user.id);
        });
        i -= 0.5;
      }
    }
    setIsOpen(false);
  };

  const onChangeVacation = event => {
    setValue(event.target.value);
  };
  return (
    <div className="modal">
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
    </div>
  );
};

export default AddVacation;
