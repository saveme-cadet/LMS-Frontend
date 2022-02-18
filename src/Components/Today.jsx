const getDayMessage = today => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  if (today != 0 && today != 6) {
    return `오늘은 ${week[today]}요일입니다. 잊지말고 체크인과 체크아웃!`;
  } else return `오늘은 ${week[today]}요일입니다. 공부를 하신다면 아오지로!`;
};

const Today = ({ time }) => {
  const today = time.day();
  return (
    <div>
      <h1>{time.format('YYYY-MM-DD')}</h1>
      <h1>{getDayMessage(today)}</h1>
    </div>
  );
};

export default Today;
