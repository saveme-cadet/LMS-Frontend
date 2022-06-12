const CadetListItem = ({ list }) => {
  return (
    <span>
      {list.titleCheck === true ? (
        <span
          style={{
            textDecorationLine: 'line-through',
            color: 'gray',
          }}
        >
          {list.title}
        </span>
      ) : (
        <span>{list.title}</span>
      )}
    </span>
  );
};

export default CadetListItem;
