import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, ErrorPage } from "./Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
