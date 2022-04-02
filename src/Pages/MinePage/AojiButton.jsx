const AojiButton = ({ onClickAoji, state }) => {
  return (
    <>
      {!state ? (
        <button onClick={onClickAoji}>시작!</button>
      ) : (
        <button onClick={onClickAoji}>종료!</button>
      )}
    </>
  );
};

export default AojiButton;
