import { useState, useEffect } from 'react';

interface FetchResult<T> {
  data: T | undefined;
  error: unknown;
  loading: boolean;
}
// can use axios + react-query
export const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((responseData: T) => setData(responseData))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
