import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AdminPage,
  MainPage,
  MinePage,
  TodoPage,
  LoginPage,
  OAuthPage,
} from 'Pages';
import { SideBar } from 'Components';

import Styled from 'Styled/Global.styled';

const MainRoute = () => {
  return (
    <>
      <Styled.CusTab>
        <SideBar />
      </Styled.CusTab>
      <Styled.Body>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/kakao/callback" element={<OAuthPage />} />
        </Routes>
      </Styled.Body>
    </>
  );
};

export default MainRoute;
