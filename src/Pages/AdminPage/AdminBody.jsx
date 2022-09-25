import { useContext } from 'react';
import { AuthContext } from 'App';
import { NotValid } from 'Components';
import { ERROR_MESSAGES } from 'Utils/constants';

import AdminContainer from './AdminContainer';

const AdminBody = ({ isOpen, setIsOpen }) => {
  const auth = useContext(AuthContext);
  const userRole = auth.status.role;
  const userId = auth.status.userId;

  const isAuth = () => {
    if (userRole === 'ROLE_MANAGER') return true;
    if (userRole === 'ROLE_ADMIN') return true;
    return false;
  };
  return (
    <>
      {isAuth() ? (
        <AdminContainer
          auth={auth}
          userId={userId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ) : (
        <NotValid code={ERROR_MESSAGES.NO_AUTH} />
      )}
    </>
  );
};

export default AdminBody;
