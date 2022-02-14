import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, MinePage, ProfilePage, ErrorPage, TodoPage } from './Pages';
import { SideBar } from './Components';

import Styled from './Styled/Global.styled';
import './App.css';
const App = () => {
  return (
    <>
      <Styled.Golbal>
        <Router>
          <SideBar />
          <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/check" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/mine" element={<MinePage />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </Router>
      </Styled.Golbal>
    </>
  );
};

export default App;
