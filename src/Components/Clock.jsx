const Clock = ({ time }) => {
  return (
    <div>
      <h1> {time.format('HH:mm:ss')}</h1>
    </div>
  );
};

export default Clock;
