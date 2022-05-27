const MineButton = ({ onClickAoji, state }) => {
  return (
    <>
      {!state ? (
        <button onClick={onClickAoji} className="start">
          시작!
        </button>
      ) : (
        <button onClick={onClickAoji} className="end">
          종료!
        </button>
      )}
    </>
  );
};

export default MineButton;
