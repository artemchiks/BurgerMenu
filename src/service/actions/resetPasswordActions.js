import { PASSWORD_REST_PASS } from "../../utils/api";
import { checkResponse } from "../../components/checkResponse";
import {} from "../burgerConstructor";

export const resetPassApi = (newPassword, token) => async (dispatch) => {
  try {
    const response = await fetch(PASSWORD_REST_PASS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword, token }),
    });

    const data = await checkResponse(response);

    if (data.success) {
      return true;
    } else {
      console.error("Ошибка сброса пароля:", data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
