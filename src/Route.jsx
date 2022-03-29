import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage, MinePage, TodoPage } from 'Pages';
import { SideBar } from 'Components';

import Styled from 'Styled/Global.styled';

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Styled.CusTab>
        <SideBar />
      </Styled.CusTab>
      <Styled.Body>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Styled.Body>
    </BrowserRouter>
  );
};

export default MainRoute;
