import { useState, createContext, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, OAuthPage } from 'Pages';
import MainRoute from './Route';

import Styled from 'Styled/Global.styled';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(200);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const initState = async () => {
      let response;
      // try {
      //   response = await UserService.getUser();
      // } catch (e) {
      //   console.log('app : ', e);
      // }
      // setUserId(response.data);
      // setState(response.state);
      setUserId(5);
      setState(200);
      setIsLoading(false);
    };
    initState();
  }, [isLoading]);

  return (
    <AuthContext.Provider value={{ state, isLoading, userId, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const Loading = () => {
  return <div>로딩중!!!</div>;
};

const OAuthCheckRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  console.log('auth : ', auth);
  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (auth.state !== 401) return children;
    else return <Navigate to="/login" />;
    // return children;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Styled.Golbal>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/kakao/callback" element={<OAuthPage />} />
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
