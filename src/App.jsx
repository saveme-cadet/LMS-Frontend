import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AdminPage,
  MainPage,
  MinePage,
  MyPage,
  ErrorPage,
  TodoPage,
} from 'Pages';
import { SideBar, ShowToday } from 'Components';

import Styled from 'Styled/Global.styled';
const App = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Styled.Golbal>
        <Router>
          <Styled.CusTab>
            <SideBar />
          </Styled.CusTab>
          <Styled.Body>
            <ShowToday date={date} />

            <Routes>
              <Route path="/*" element={<ErrorPage />} />
              <Route
                path="/"
                element={<MainPage date={date} setDate={setDate} />}
              />

              <Route path="/todo" element={<TodoPage />} />
              <Route path="/mine" element={<MinePage />} />
              <Route path="/admin" element={<AdminPage />} />

              {/* <Route path="/stats" element={<StatsPage />} /> */}
            </Routes>
          </Styled.Body>
        </Router>
      </Styled.Golbal>
    </>
  );
};

export default App;
