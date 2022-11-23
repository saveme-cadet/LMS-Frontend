import { useState } from 'react';
import { ModalBackground } from 'Components';
import { VACATION } from 'Utils/constants';
import { VacationService } from 'API';

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const ModalAddVacationAll = ({
  setIsOpen,
  attendUser,
  getUser,
  setSelectUserId,
  rowData,
}) => {
  const [value, setValue] = useState(0);

  const addVacation = async (select, addedDays) => {
    const body = {
      addedDays: addedDays,
      reason: '단체 휴가 증가',
    };
    await VacationService.addVacation(select, body);
    setSelectUserId(null);
  };

  const minusVacation = async (select, usedDays) => {
    const body = { usedDays: usedDays, reason: '단체 휴가 감소' };
    const selectUser = rowData.filter(user => user.id === select);
    if (selectUser[0].vacation === 0) {
      // console.log('감소시킬 휴가가 없습니다!');
      return;
    }
    await VacationService.useVacation(select, body);
    setSelectUserId(null);
  };

  const handleCloseModal = isAccept => {
    if (isAccept && value) {
      attendUser.map(user => {
        // user.vacation 자료형 물어보기
        // 짧은 시간에 API 반복 요청 => 처리가 안되는 이슈
        if (value > VACATION.ZERO) addVacation(user.id, value);
        else if (value < VACATION.ZERO) minusVacation(user.id, -value);
      });
    }
    getUser();
    setIsOpen(false);
  };

  const onChangeVacation = event => {
    setValue(event.target.value);
  };
  return (
    <ModalBackground setIsOpen={setIsOpen}>
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
      <div className="buttons">
        <Button onClick={() => handleCloseModal(true)}>확인</Button>
        <Button onClick={() => handleCloseModal(false)}>취소</Button>
      </div>
    </ModalBackground>
  );
};

export default ModalAddVacationAll;
