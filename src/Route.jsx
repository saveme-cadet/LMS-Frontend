import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  AdminPage,
  MainPage,
  MinePage,
  TodoPage,
  LoginPage,
  OAuthPage,
} from 'Pages';
import { SideBar } from 'Components';

import { AuthContext } from './App';
import Styled from 'Styled/Global.styled';

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

const MainRoute = () => {
  return (
    <>
      <Styled.CusTab>
        <SideBar />
      </Styled.CusTab>
      <Styled.Body>
        <Routes>
          <Route
            path="/"
            element={
              <OAuthCheckRoute>
                <MainPage />
              </OAuthCheckRoute>
            }
          />

          <Route
            path="/todo"
            element={
              <OAuthCheckRoute>
                <TodoPage />
              </OAuthCheckRoute>
            }
          />

          <Route
            path="/mine"
            element={
              <OAuthCheckRoute>
                <MinePage />
              </OAuthCheckRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <OAuthCheckRoute>
                <AdminPage />
              </OAuthCheckRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/kakao/callback" element={<OAuthPage />} />
        </Routes>
      </Styled.Body>
    </>
  );
};

export default MainRoute;
