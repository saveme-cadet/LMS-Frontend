import Button from '@mui/material/Button';

const FindTarget = ({ setIsOpen, attendUser }) => {
  return (
    <div className="modal">
      <h1>월렛 보상 대상</h1>
      <h3>
        생존자에게 5월렛, 출결 우수자 3인에게 추가 월렛이 차등 지급(3, 2,
        1)됩니다.
      </h3>
      <h3>출결 점수가 동률일 경우, 아오지 시간을 비교해서 결정합니다.</h3>
      <Button onClick={() => setIsOpen(false)}>확인</Button>
      <Button onClick={() => setIsOpen(false)}>취소</Button>
    </div>
  );
};

export default FindTarget;
