import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, ErrorPage } from './Pages';
import { Header } from './Components';

import Styled from './Styled/Global.styled';
const App = () => {
  return (
    <>
      <Styled.Golbal>
        <Router>
          <Header />
          <Routes>
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/check" element={<MainPage />} />
            <Route path="/profile" element={<MainPage />} />
            <Route path="/mine" element={<MainPage />} />
          </Routes>
        </Router>
      </Styled.Golbal>
    </>
  );
};

export default App;
