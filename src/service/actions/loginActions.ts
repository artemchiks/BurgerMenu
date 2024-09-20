import { LOGIN_API } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import { AppDispatch } from "../../types/type";
import { setUser } from "../userSlice";

export const loginApi = (email:string, pass:string) => async (dispatch:AppDispatch) => {
  try {
    const response = await fetch(LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: pass }),
    });

    const data = await checkResponse(response);

    if (data.success) {
      const { user, accessToken, refreshToken } = data;
      dispatch(setUser({ email: user.email, name: user.name }));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return [true, null];
    } else {
      console.error("Ошибка авторизации:", data.message);
      return [false, `Ошибка авторизации: ${data.message}`];
    }
  } catch (e) {
    console.error("Произошла ошибка", e);
  }
};
