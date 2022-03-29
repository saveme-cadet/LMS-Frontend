import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { OAuthService } from 'Network';
const OAuthPage = () => {
  const loca = useLocation();

  const code = loca.search.split('=')[1];

  useEffect(async () => {
    const result = await OAuthService.getToken(code);
  }, []);
  return <>asfsa</>;
};

export default OAuthPage;
