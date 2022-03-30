const GetCheckIcons = ({ type }) => {
  switch (type) {
    case 1:
      return <div className="check type">출석</div>;
    case 2:
      return <div className="late type">지각</div>;
    case 3:
      return <div className="not type">결석</div>;
    case 4:
      return <div className="vacancy type">공결</div>;
    case 5:
      return <div className="illness type">병결</div>;
    case 6:
      return <div className="vacation type">휴가</div>;
    default:
      return <></>;
  }
};

export default GetCheckIcons;
