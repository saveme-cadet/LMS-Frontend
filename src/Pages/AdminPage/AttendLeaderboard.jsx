import Button from '@mui/material/Button';

const AttendLeaderboard = ({ setIsOpen, attendUser }) => {
  const sortArray = attendUser.sort((a, b) => {
    if (a.participateScore === b.participateScore) {
      if (a.attendScore < b.attendScore) return -1;
      else if (a.attendScore > b.attendScore) return 1;
      // 아오지 업데이트 되면 교체
      else return 0;
    }
    if (a.participateScore > b.participateScore) return -1;
    if (a.participateScore < b.participateScore) return 1;
    return 0;
  });
  // const isVaildLeaderboard = index => {
  //   if (sortArray.length <= index) return -1;
  //   if (sortArray[index].participateScore === 0) return -1;
  //   return 0;
  // };
  return (
    <div className="modal">
      <h1>월렛 보상 대상</h1>
      <h3>
        생존자에게 5월렛, 출석 우수자 3인에게 추가 월렛이 차등 지급(3, 2,
        1)됩니다.
      </h3>
      <h3>출석 점수가 동일할 경우, 결석 시간을 비교합니다.</h3>
      {/* {sortArray.map((e, i) => {
        return (
          <h1 key={i}>
            {i + 1}등 - {e.userName} {e.participateScore}
          </h1>
        );
      })} */}
      <h1>
        🥇{sortArray[0].userName}🥇 - 출석점수 {sortArray[0].participateScore}점
        - 결석점수 {sortArray[0].attendScore.toFixed(2)}점
      </h1>
      <h1>
        🥈{sortArray[1].userName}🥈 - 출석점수 {sortArray[1].participateScore}점
        - 결석점수 {sortArray[1].attendScore.toFixed(2)}점
      </h1>
      <h1>
        🥉{sortArray[2].userName}🥉 - 출석점수 {sortArray[2].participateScore}점
        - 결석점수 {sortArray[2].attendScore.toFixed(2)}점
      </h1>
      <Button onClick={() => setIsOpen(false)}>확인</Button>
      <Button onClick={() => setIsOpen(false)}>취소</Button>
    </div>
  );
};

export default AttendLeaderboard;
