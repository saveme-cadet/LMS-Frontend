import { useState } from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const AddVacation = ({ setIsOpen, attendUser, addVacation }) => {
  const [value, setValue] = useState(0);
  console.log('attend', attendUser);

  const handleCloseModal = isAccept => {
    if (isAccept && value) {
      let i = 0;
      while (i < value) {
        attendUser.map(user => {
          addVacation(user.id);
        });
        i += 0.5;
      }
    }
    setIsOpen(false);
  };

  const onChangeVacation = event => {
    setValue(event.target.value);
  };
  return (
    <div className="modal">
      <h1>일괄 휴가 추가</h1>
      <h3>참가 중인 사용자들의 휴가를 추가합니다.</h3>
      <h3>얼마나 추가하시겠습니까?</h3> {value}일
      <Slider
        defaultValue={0}
        value={value}
        onChange={onChangeVacation}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={0}
        max={3}
      />
      <Button onClick={() => handleCloseModal(true)}>확인</Button>
      <Button onClick={() => handleCloseModal(false)}>취소</Button>
    </div>
  );
};

export default AddVacation;
