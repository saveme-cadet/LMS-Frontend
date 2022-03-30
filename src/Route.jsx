import { Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage, MinePage, TodoPage } from 'Pages';
import { SideBar } from 'Components';

import Styled from 'Styled/Global.styled';

const MainRoute = () => {
  return (
    <>
      <Styled.SideBar>
        <SideBar />
      </Styled.SideBar>
      <Styled.Body>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/todo" element={<TodoPage />} />

          <Route path="/mine" element={<MinePage />} />

          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Styled.Body>
    </>
  );
};

export default MainRoute;
