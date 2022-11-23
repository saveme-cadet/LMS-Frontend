import { ModalBackground } from 'Components';
import Button from '@mui/material/Button';

const ModalAttendLeaderboard = ({ setIsOpen, attendUser }) => {
  const sortArray = attendUser.sort((a, b) => {
    if (a.attendanceScore === b.attendanceScore) {
      if (a.absentScore < b.absentScore) return -1;
      else if (a.absentScore > b.absentScore) return 1;
      // 아오지 업데이트 되면 교체
      else return 0;
    }
    if (a.attendanceScore > b.attendanceScore) return -1;
    if (a.attendanceScore < b.attendanceScore) return 1;
    return 0;
  });

  return (
    <>
      {attendUser && (
        <ModalBackground setIsOpen={setIsOpen}>
          <h1>월렛 보상 대상</h1>
          <h3>
            생존자에게 5월렛, 출석 우수자 3인에게 추가 월렛이 차등 지급(3, 2,
            1)됩니다.
          </h3>
          <h3>출석 점수가 동일할 경우, 결석 시간을 비교합니다.</h3>

          {attendUser.length === 0 ? (
            ''
          ) : (
            <h1>
              🥇{sortArray[0].username}🥇 - 출석점수{' '}
              {sortArray[0].attendanceScore}점 - 결석점수{' '}
              {sortArray[0].absentScore}점
            </h1>
          )}
          {attendUser.length <= 1 ? (
            ''
          ) : (
            <h1>
              🥈{sortArray[1].username}🥈 - 출석점수{' '}
              {sortArray[1].attendanceScore}점 - 결석점수{' '}
              {sortArray[1].absentScore}점
            </h1>
          )}
          {attendUser.length <= 2 ? (
            ''
          ) : (
            <h1>
              🥉{sortArray[2].username}🥉 - 출석점수{' '}
              {sortArray[2].attendanceScore}점 - 결석점수{' '}
              {sortArray[2].absentScore}점
            </h1>
          )}
          <div className="buttons">
            <Button onClick={() => setIsOpen(false)}>닫기</Button>
          </div>
        </ModalBackground>
      )}
    </>
  );
};

export default ModalAttendLeaderboard;
