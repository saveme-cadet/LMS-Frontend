import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AdminPage,
  MainPage,
  CheckPage,
  MinePage,
  ProfilePage,
  ErrorPage,
  TodoPage,
  StatsPage,
} from 'Pages';
import { SideBar } from 'Components';

import Styled from 'Styled/Global.styled';
const App = () => {
  return (
    <>
      <Styled.Golbal>
        <Router>
          <SideBar />
          <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<CheckPage />} />
            <Route path="/admin" element={<AdminPage />} />

            <Route path="/check" element={<CheckPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/mine" element={<MinePage />} />
          </Routes>
        </Router>
      </Styled.Golbal>
    </>
  );
};

export default App;
