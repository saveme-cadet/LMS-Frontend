import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AdminPage,
  MainPage,
  MinePage,
  MyPage,
  ErrorPage,
  TodoPage,
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
            <Route path="/" element={<MainPage />} />

            <Route path="/my" element={<MyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/mine" element={<MinePage />} />

            {/* <Route path="/stats" element={<StatsPage />} /> */}
          </Routes>
        </Router>
      </Styled.Golbal>
    </>
  );
};

export default App;
