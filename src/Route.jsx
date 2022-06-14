import { Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage, MinePage, TodoPage } from 'Pages';
import { SideBar } from 'Components';

import styled from 'styled-components';

const MainRoute = () => {
  return (
    <>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
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

const SideBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #220646;
  height: 100%;
  width: 150px;

  .tabs {
    height: 100%;
  }
  .button {
    color: #ffffff;
    max-width: 13em;
  }
  .logout {
    text-align: center;
    border: 1px solid transparent;
    background-color: #110323;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5rem;
    font-size: 20px;
    font-weight: bold;
  }
`;

const BodyContainer = styled.div`
  margin-left: 150px;
  width: calc(100% - 150px);
  overflow-y: scroll;
`;
