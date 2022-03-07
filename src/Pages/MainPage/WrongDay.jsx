const WrongDay = ({ wrongType }) => {
  return (
    <>
      {wrongType === -1 ? (
        <>아직 진행하지 않는 날짜입니다!</>
      ) : (
        <>오늘은 주말입니다! 추가 공부를 하신다면 아오지로!</>
      )}
    </>
  );
};

export default WrongDay;
