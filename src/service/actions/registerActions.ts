import { REGISTER_API } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import { AppDispatch } from "../../types/type";
import {} from "../burgerConstructor";
import { setUser } from "../userSlice";

export const registerApi = (email:string, password:string, name:string) => async (dispatch:AppDispatch) => {
  try {
    const response = await fetch(REGISTER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await checkResponse(response);

    if (data.success) {
      const { name, accessToken, refreshToken } = data;
      dispatch(setUser({ email, name }));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return [true, null];
    } else {
      console.error("Ошибка регистрации:", data.message);
      return [false, `Ошибка регистрации: ${data.message}`];
    }
  } catch (e) {
    console.log("Произошла ошибка", e);
  }
};
