import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_API } from "../../utils/api";

export const refreshTokenApi = (url, options) => async () => {
  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  let refreshToken = localStorage.getItem(REFRESH_TOKEN);
  try {
    options.headers.authorization = accessToken;

    const response = await fetch(TOKEN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(ACCESS_TOKEN, data.accessToken);
      localStorage.setItem(REFRESH_TOKEN, data.refreshToken);
      options.headers.authorization = localStorage.getItem(ACCESS_TOKEN);
      const res = await fetch(url, options);
      if (res.ok) {
        return res.json();
      }
    }
  } catch (error) {
    console.error("Ошибка при обновлении токена:", error);
    return false;
  }
};
