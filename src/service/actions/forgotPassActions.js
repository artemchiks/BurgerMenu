import { PASSWORD_REST_EMAIL } from "../../utils/api";
import { checkResponse } from "../../components/checkResponse";
import {} from "../burgerConstructor";

export const forgotPassApi = (email) => async (dispatch) => {
  if (email === "") {
    return;
  }
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
      dispatch({ type: "REGISTRATION_SUCCESS", payload: data });
      return true;
    } else {
      console.error("Ошибка регистрации:", data.message);
    }
  } catch (error) {
    console.error(error);
    return;
  }
};
