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

export const getOthersTodo = date => {
  const { status, data, error } = useQuery(
    ['otherTodos', date],
    () => TodoService.getOthers(date),
    {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 10,
      retry: 0,
    },
  );

  return { status, data };
};
