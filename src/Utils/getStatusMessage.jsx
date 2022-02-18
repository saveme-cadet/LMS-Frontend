const getStatusMessage = code => {
  switch (code) {
    case 0:
      return `체크인 기다리는 중! 오늘도 힘내세요!`;
    case 1:
      return `열심히 공부 중! 파이팅하세요!`;
    case 2:
      return '오늘 공부 끝! 푹 쉬세요!';
    case 3:
      return '공결 처리! 잘 다녀오세요!';
    case 4:
      return '병가 처리... 빨리 나으세요ㅠㅠ';
    case 5:
      return '휴가 처리! 열심히 일한 당신, 떠나라!';
    default:
      return 'null 처리. 이걸 보셨다면 제보해주세요...ㅠ';
  }
};

export default getStatusMessage;
