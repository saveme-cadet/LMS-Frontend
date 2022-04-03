const userGuide = ({ status }) => {
  const { userName, role, team } = status;
  return (
    <>
      <div>
        안녕하세요 {userName}! 당신의 팀은 {team}
        팀입니다!
      </div>
      {role === '머슴' ? (
        <>게더에서 {team}팀 체크인 체크아웃을 진행해주세요!</>
      ) : (
        <>목표 작성 후 체크인 체크아웃에 참가하세요!</>
      )}
    </>
  );
};

export default userGuide;
