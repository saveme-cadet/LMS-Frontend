import { useQuery } from 'react-query';
import { TodoService } from 'API';

export const getTodo = (userId, date) => {
  const { status, data, error } = useQuery(
    ['todos', date],
    () => TodoService.getTodo(userId, date),
    {
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 1,
      cacheTime: 1000 * 30,
      retry: 0,
    },
  );

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
