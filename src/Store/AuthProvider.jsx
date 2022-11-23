import { useState, createContext, useEffect } from 'react';
import { UserInfoService } from 'API';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [modalType, setModalType] = useState(null); // default : null, 'EDIT', 'DELETE'
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');

    setStatus({ userId: userId, role: role });
    setIsLoading(false);
  }, [isLoading]);

  useEffect(async () => {
    // 로그인 확인용
    const result = await UserInfoService.getAllUser(0, 100);
    if (!result) {
      // alert('세션 만료!');
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
