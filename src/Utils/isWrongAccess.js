const isWrongAccess = (selectUserInfo, myId, myRole, myTeam) => {
  if (myRole !== 'ROLE_MANAGER' && selectUserInfo.id !== myId) return -1;
  if (myRole === 'ROLE_MANAGER' && selectUserInfo.team !== myTeam) return -2;
  return 0;
};

export default isWrongAccess;
