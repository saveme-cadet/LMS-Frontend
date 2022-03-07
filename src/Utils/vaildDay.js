const vaildDay = day => {
  const today = new Date();

  const todayNum = today.getDay;
  if (day.getTime() > today.getTime()) return -1;
  else if (todayNum === 0 || todayNum === 6) return -2;
  else return 0;
};

export default vaildDay;
