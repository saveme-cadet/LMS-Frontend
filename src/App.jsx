import { useState, createContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainRoute from './Route';

import Styled from 'Styled/Global.styled';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(200);
  const [isLoading, setIsLoading] = useState(true);
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    const initState = async () => {
      let response;
      // try {
      //   response = await UserService.getUser();
      // } catch (e) {
      //   console.log('app : ', e);
      // }
      // setCurUser(response.data);
      // setState(response.state);
      setCurUser(1);
      setState(200);
      setIsLoading(false);
    };
    initState();
  }, [isLoading]);

  return (
    <AuthContext.Provider value={{ state, isLoading, curUser, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Styled.Golbal>
          <MainRoute />
        </Styled.Golbal>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
