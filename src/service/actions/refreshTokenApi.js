import { TOKEN_API } from "../../utils/api";

export const refreshTokenApi = () => async (dispatch) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await fetch(TOKEN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    const data = await checkResponse(response);

    if (data.success) {
      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken.split(" ")[1]);
      localStorage.setItem("refreshToken", refreshToken);

      return true;
    } else {
      console.error("Ошибка обновления токена:", data.message);
      return false;
    }
  } catch (error) {
    console.error("Ошибка при обновлении токена:", error);
    return false;
  }
};
