import { checkResponse } from "../../components/checkResponse";
import { TOKEN_API } from "../../utils/api";
import { logout } from "../userSlice";

export const refreshTokenApi = () => async (dispatch) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshTokenApi) {
      return false;
    }

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
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return true;
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(logout());

      console.error("Ошибка обновления токена:", data.message);
      return false;
    }
  } catch (error) {
    console.error("Ошибка при обновлении токена:", error);
    return false;
  }
};
