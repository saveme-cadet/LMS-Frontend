import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminPage, MainPage, MinePage, TodoPage } from 'Pages';
import { SideBar, ShowToday } from 'Components';

import Styled from 'Styled/Global.styled';

const MainRoute = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Styled.CusTab>
        <SideBar />
      </Styled.CusTab>
      <Styled.Body>
        <ShowToday date={date} />
        <Routes>
          <Route
            path="/"
            element={<MainPage date={date} setDate={setDate} />}
          />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Styled.Body>
    </>
  );
};

export default MainRoute;
