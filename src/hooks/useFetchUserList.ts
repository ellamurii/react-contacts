import { useState, useEffect } from 'react';
import { usersApi } from '../api/users';
import { delay } from '../utils/delay';

interface FetchResult {
  data: User[] | undefined;
  error: unknown;
  loading: boolean;
}
// can use axios + react-query
export const useFetchUserList = (): FetchResult => {
  const [data, setData] = useState<User[] | undefined>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    usersApi
      .get()
      .then(async (res) => {
        await delay();
        setData(res);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};
