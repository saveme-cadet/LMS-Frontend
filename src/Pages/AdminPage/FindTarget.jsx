import Button from '@mui/material/Button';

const FindTarget = ({ setIsOpen, attendUser }) => {
  const sortArray = attendUser.sort((a, b) => {
    if (a.participateScore === b.participateScore) {
      if (a.vacation > b.vacation) return -1;
      else if (a.vacation < b.vacation) return 1;
      // 아오지 업데이트 되면 교체
      else return 0;
    }
    if (a.participateScore > b.participateScore) return -1;
    if (a.participateScore < b.participateScore) return 1;
    return 0;
  });

  console.log(attendUser);
  return (
    <div className="modal">
      <h1>월렛 보상 대상</h1>
      <h3>
        생존자에게 5월렛, 출결 우수자 3인에게 추가 월렛이 차등 지급(3, 2,
        1)됩니다.
      </h3>
      <h3>출결 점수가 동률일 경우, 아오지 시간을 비교해서 결정합니다.</h3>
      {/* {sortArray.map((e, i) => {
        return (
          <h1 key={i}>
            {i + 1}등 - {e.userName} {e.participateScore}
          </h1>
        );
      })} */}
      <h1>
        🥇{sortArray[0].userName}🥇 - 참가점수
        {sortArray[0].participateScore}점 - 아오지 시간 0시간
      </h1>
      <h1>
        🥈{sortArray[1].userName}🥈 - 참가점수
        {sortArray[1].participateScore}점 - 아오지 시간 0시간
      </h1>
      <h1>
        🥉{sortArray[2].userName}🥉 - 참가점수
        {sortArray[2].participateScore}점 - 아오지 시간 0시간
      </h1>
      <Button onClick={() => setIsOpen(false)}>확인</Button>
      <Button onClick={() => setIsOpen(false)}>취소</Button>
    </div>
  );
};

export default FindTarget;
