import { LOGIN_API } from "../../utils/api";
import { checkResponse } from "../../components/checkResponse";

export const loginApi = (email, pass, token) => async (dispatch) => {
  try {
    const response = await fetch(LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: pass }),
      Authorization: token,
    });

    document.cookie = "";
    const data = await checkResponse(response);

    if (data.success) {
      dispatch({ type: "LOGIN", payload: data });
      const { accessToken, refreshToken } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return true;
    } else {
      console.error("Ошибка авторизации:", data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
