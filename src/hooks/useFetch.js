import { useEffect, useState } from 'react';

export function useFetch(endpoint) {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData(undefined);
    setIsError(false);
    setIsLoading(true);

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://vts.guimtech.fr/api/${endpoint}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (e) {
        if (e.name === 'AbortError') return;

        setIsError(e.message || true);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, isError, isLoading };
}
