import { PASSWORD_REST_PASS } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import {} from "../burgerConstructor";

export const resetPassApi = (newPassword : string, token:string) => async (): Promise<void | boolean>  => {
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
  } catch (e) {
    console.error("Произошла ошибка", e);
  }
};
