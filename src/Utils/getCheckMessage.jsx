const getCheckMessage = code => {
  switch (code) {
    case 0:
      return ``;
    case 1:
      return `출석`;
    case 2:
      return '지각';
    case 3:
      return '결석';
    case 4:
      return '공결';
    case 5:
      return '병결';
    case 6:
      return '휴가';
    default:
      return 'null';
  }
};

export default getCheckMessage;
