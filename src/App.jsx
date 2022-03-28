import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import {
  AdminPage,
  MainPage,
  MinePage,
  ErrorPage,
  TodoPage,
  LoginPage,
} from 'Pages';
import MainRoute from './Route';

import Styled from 'Styled/Global.styled';

const App = () => {
  return (
    <BrowserRouter>
      <Styled.Golbal>
        <MainRoute />
        {/* <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainRoute />} />
          <Route path="/todo" element={<MainRoute />} />
          <Route path="/mine" element={<MainRoute />} />
          <Route path="/admin" element={<MainRoute />} />
        </Routes>
      </BrowserRouter> */}
      </Styled.Golbal>
    </BrowserRouter>
  );
};

export default App;
