import { FC } from "react";
import { PASSWORD_REST_EMAIL } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import {} from "../burgerConstructor";

export interface Response {
  success?: boolean;
  error?: string;
}

export const forgotPassApi = async(email: string):Promise<Response> => {
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
      return {
        error: `Ошибка восстановления пароля: ${data.message}`,
      };
    }
  } catch (e) {
    return {
      error: "Произошла ошибка при восстановлении пароля. Пожалуйста, попробуйте еще раз."
    };
  }
};
