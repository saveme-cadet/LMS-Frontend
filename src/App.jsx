import { useState, createContext, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage } from 'Pages';
import MainRoute from './Route';

import styled from 'styled-components';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const userId = localStorage.getItem('userId');

    setStatus({ userId });
    setIsLoading(false);
  }, [isLoading]);

  return (
    <AuthContext.Provider
      value={{ isLoading, setIsLoading, status, setStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const Loading = () => {
  return <div>로딩중!!!</div>;
};

const validStatus = ({ userId }) => {
  return userId;
};

const OAuthCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (auth.status && validStatus(auth.status)) return children;
    else return <Navigate to="/login" />;
  }
};

const LoginCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (!auth.status || !validStatus(auth.status)) return children;
    else return <Navigate to="/" />;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RootContainer>
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
        </RootContainer>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

const RootContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
  }
`;
