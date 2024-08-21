import { PASSWORD_REST_EMAIL } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import {} from "../burgerConstructor";

export const forgotPassApi = (email) => async (dispatch) => {
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
    return {
      error: `Ошибка восстановления пароля: ${data.message}`,
    };
  }
};
