import { useState, createContext, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { UserInfoService } from 'API';
import { getUser } from 'Hooks/user';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [modalType, setModalType] = useState(null); // default : null, 'EDIT', 'DELETE'

  const queryClient = useQueryClient();

  // const { status: stat, data: toDos } = getUser();
  // console.log('stat : ', stat, 'data : ', toDos);
  // const client = useQueryClient();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    queryClient.setQueryData('myData', { userId, role });
    setStatus({ userId: userId, role: role });
    setIsLoading(false);
  }, [isLoading]);

  useEffect(async () => {
    // 로그인 확인용

    const result = await UserInfoService.getAllUser(0, 100);
    if (!result) {
      localStorage.clear();
      setStatus(null);
    }
  }, []);

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
