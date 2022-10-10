const isWrongAccess = myRole => {
  if (myRole === 'ROLE_MANAGER' || myRole === 'ROLE_ADMIN') {
    return 0;
  }
  return -1;
};

export default isWrongAccess;
