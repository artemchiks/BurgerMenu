import { REGISTER_API } from "../../utils/api";
import { checkResponse } from "../../components/checkResponse";
import {} from "../burgerConstructor";
import { useCookies } from "react-cookie";

export const registerApi =
  (email, password, name, token) => async (dispatch) => {
    try {
      const response = await fetch(REGISTER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ email, password, name }),
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
