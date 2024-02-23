import { useQuery } from 'react-query';
import { AllTableService } from 'API';
import { format } from 'date-fns';

export const getTable = async date => {
  const dateFormat = format(date, 'yyyyMMdd');

  const { status, data, error } = useQuery(
    ['dayTable', dateFormat],
    () => AllTableService.getTable(dateFormat),
    {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 5,
      cacheTime: 1000 * 30,
      retry: 2, // 실패시 재호출 몇번 할지
      //   onSuccess: data => {
      //     console.log('dayTable 성공!', data);
      //   },
      //   onError: () => {
      //     console.log('쿼리 실패!', error.message);
      //   },
    },
  );

  return { status, data };
};
