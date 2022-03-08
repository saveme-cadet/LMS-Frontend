import { useState } from 'react';

import Button from '@mui/material/Button';

const ShakeTeam = ({ attendUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="box">
      <h1>팀섞기</h1>
      <h3>
        실수로 누를 수도 있으니 확정하시겠습니까 버튼으로 API 전송 or 문자 따라
        치기 상태가 참가인 유저에 한해서 섞기, 모달창 띄울까?
      </h3>
      <Button onClick={handleToggleOpen}>자동으로 팀 섞기</Button>
      {isOpen && (
        <div className="modal">
          asfasfa
          <Button onClick={handleToggleOpen}>닫기</Button>
        </div>
      )}
    </div>
  );
};

export default ShakeTeam;
