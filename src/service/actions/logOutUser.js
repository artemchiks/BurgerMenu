import { checkResponse } from "../../utils/checkResponse";
import { LOGOUT_API } from "../../utils/api";
import { logout } from "../userSlice";

export const logoutApi = () => async (dispatch) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return;
    }
    const response = await fetch(LOGOUT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    const data = await checkResponse(response);

    if (data.success) {
      dispatch(logout());
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return true;
    } else {
      console.error("Ошибка", data.message);
    }
  } catch (error) {
    console.error("Произошла ошибка при выходе:", error);
  }
};
