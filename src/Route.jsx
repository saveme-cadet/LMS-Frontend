import { Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage, MinePage, TodoPage } from 'Pages';
import { SideBar } from 'Components';

import styled from 'styled-components';

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
        </Routes>
      </BodyContainer>
    </>
  );
};

export default MainRoute;

const BodyContainer = styled.div`
  margin-left: 150px;
  width: calc(100% - 150px);
  overflow-y: scroll;
`;
