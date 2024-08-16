import { PASSWORD_REST_EMAIL } from "../../utils/api";
import { checkResponse } from "../../components/checkResponse";
import {} from "../burgerConstructor";

export const forgotPassApi = (email) => async (dispatch) => {
  try {
    const response = await fetch(PASSWORD_REST_EMAIL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await checkResponse(response);
    if (data.success) {
      return { success: true };
    } else {
      console.error("Ошибка восстановления пароля:", data.message);
      return { error: `Ошибка восстановления пароля: ${data.message}`};
    }
  } catch (error) {
    console.error(error);
    return { error: 'Неизвестная ошибка'};
  }
};
