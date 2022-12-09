import { useQuery, useQueryClient } from 'react-query';
import { AllTableService } from 'API';
import { format } from 'date-fns';

export const getTable = date => {
  const dateFormat = format(date, 'yyyy-MM-dd');

  const { status, data, error } = useQuery(
    ['dayTable', dateFormat],
    () => AllTableService.getTable(dateFormat, true),
    {
      refetchOnWindowFocus: false,
      //   staleTime: 1000 * 5,
      cacheTime: 1000 * 30,
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: data => {
        console.log('dayTable 성공!', data);
      },
      onError: () => {
        console.log('쿼리 실패!', error.message);
      },
    },
  );

  console.log('get Table 쿼리 : ', data);
  return { status, data };
};

// export const refreshTable = (queryClient, date) => {
//   const dateFormat = format(date, 'yyyy-MM-dd');

//   queryClient.invalidateQueries(['dayTable', dateFormat]);
// };
// export const putTableCheckIn = useMutation((userId, attendanceId, body) =>
//   AllTableService.putAllTableCheckIn(userId, attendanceId, body),
// );

// export const putTableCheckOut = useMutation((userId, attendanceId, body) =>
//   AllTableService.putAllTableCheckOut(userId, attendanceId, body),
// );
