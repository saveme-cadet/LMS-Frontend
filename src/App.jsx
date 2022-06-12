import { useState, createContext, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, OAuthPage } from 'Pages';
import MainRoute from './Route';

import Styled from 'Styled/Global.styled';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [state, setState] = useState(200);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    const role = localStorage.getItem('role');
    const team = localStorage.getItem('team');
    setStatus({ userId, userName, role, team });
    setIsLoading(false);
  }, [isLoading]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        status,
        setStatus,
        isModal,
        setIsModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const Loading = () => {
  return <div>로딩중!!!</div>;
};

const validStatus = ({ userId, userName, role, team }) => {
  return userId && userName && role && team;
};

const OAuthCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  // console.log('cur auth : ', auth);
  // console.log('cur status : ', auth.status);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (auth.status && validStatus(auth.status)) return children;
    else return <Navigate to="/login" />;
    // return children;
  }
};

const LoginCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (!auth.status || !validStatus(auth.status)) return children;
    else return <Navigate to="/" />;
    // return children;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Styled.Golbal>
          <Routes>
            <Route
              path="/login"
              element={
                <LoginCheckRoute>
                  <LoginPage />
                </LoginCheckRoute>
              }
            />

            {/* <Route path="/oauth/kakao/callback" element={<OAuthPage />} /> */}
            <Route
              path="/*"
              element={
                <OAuthCheckRoute>
                  <MainRoute />
                </OAuthCheckRoute>
              }
            />
          </Routes>
        </Styled.Golbal>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
