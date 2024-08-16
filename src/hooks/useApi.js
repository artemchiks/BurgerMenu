import { useEffect, useState } from "react";

export const useApi = (path, method, data) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));

  const request = async () => fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
    data: data && JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => setError(err))

  const tryToGet = async () => {
    request().catch()
  }

  useEffect(() => {
    request();
  }, [path, method, data, accessToken])
}
