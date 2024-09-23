import { useEffect, useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface UseApiResult<T> {
  data: T | null;
  error: Error | null;
  request: () => Promise<void>;
}

export const useApi = <T,>(path: string, method: HttpMethod, requestData?: any): UseApiResult<T> => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('accessToken'));

  const request = async () => {
    try {
      const response = await fetch(path, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
        body: requestData ? JSON.stringify(requestData) : null,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    request();
  }, [path, method, requestData, accessToken]);

  return { data, error, request };
};