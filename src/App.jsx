import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, ErrorPage } from './Pages';
import { Header } from './Components';

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
