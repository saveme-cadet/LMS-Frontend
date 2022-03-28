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
import { SideBar, ShowToday } from 'Components';

import Styled from 'Styled/Global.styled';

const MainRoute = () => {
  const [date, setDate] = useState(new Date());

  return (
    <BrowserRouter>
      <Styled.CusTab>
        <SideBar />
      </Styled.CusTab>
      <Styled.Body>
        <ShowToday date={date} />
        <Routes>
          <Route
            path="/"
            element={<MainPage date={date} setDate={setDate} />}
          />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth/kakao/callback" element={<OAuthPage />} />
        </Routes>
      </Styled.Body>
    </BrowserRouter>
  );
};

export default MainRoute;
