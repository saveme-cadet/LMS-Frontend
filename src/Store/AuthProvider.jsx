import { useState, createContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { UserInfoService } from 'API';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [modalType, setModalType] = useState(null); // default : null, 'EDIT', 'DELETE'

  const queryClient = useQueryClient();

  useEffect(() => {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    queryClient.setQueryData('myData', { username, role });
    setStatus({ username: username, role: role });
    setIsLoading(false);
  }, [isLoading]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        status,
        setStatus,
        modalType,
        setModalType,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
