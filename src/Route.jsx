import { Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage, MinePage, TodoPage } from 'Pages';
import { SideBar, UpdatePasswordModal } from 'Components';

import styled from 'styled-components';

import Test from './Test';
const MainRoute = () => {
  return (
    <>
      <SideBar />
      <BodyContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/todo" element={<TodoPage />} />

          <Route path="/mine" element={<MinePage />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BodyContainer>
      <UpdatePasswordModal />
    </>
  );
};

export default MainRoute;

const BodyContainer = styled.div`
  margin-left: 150px;
  width: calc(100% - 150px);
  overflow-y: scroll;
`;
