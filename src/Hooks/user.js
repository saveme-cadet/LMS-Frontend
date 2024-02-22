import { useQuery } from 'react-query';
import { UserInfoService } from 'API';

export const getUser = () => {
  const { status, data, error } = useQuery(
    'user',
    () => UserInfoService.getAllUser(0, 100),
    {
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 1,
      cacheTime: 1000 * 30,
      retry: 0,
    },
  );

  return { status, data };
};
