import { useState, useEffect } from 'react';
import { usersApi } from '../api/users';
import { delay } from '../utils/delay';

interface FetchResult {
  data?: string;
  error: unknown;
  loading: boolean;
}
// can use axios + react-query
export const useFetchAvatar = (username: string): FetchResult => {
  const [data, setData] = useState<string | undefined>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    usersApi
      .getAvatar(username)
      .then(async (res) => {
        await delay();
        setData(URL.createObjectURL(res));
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [username]);

  return { data, error, loading };
};
