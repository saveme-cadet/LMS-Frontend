import { useQuery } from 'react-query';
import { MineService } from 'API';

export const getMine = (userId, date) => {
  const { status, data, error } = useQuery(
    ['mine', date],
    () => MineService.getFindMine(userId, date),
    {
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 1,
      staleTime: 1000 * 5,
      cacheTime: 1000 * 30,
      retry: 0,
    },
  );

  return { status, data };
};
