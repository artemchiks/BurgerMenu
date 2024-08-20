import { checkResponse } from "../../components/checkResponse";
import {
  AUTH_API,
  LOGIN_API,
  LOGOUT_API,
  PASSWORD_REST_EMAIL,
  PASSWORD_REST_PASS,
  REGISTER_API,
} from "../../utils/api";
import { getCookie } from "../../utils/cookie";
import { refreshTokenApi } from "./refreshTokenApi";

export const resetPassApi = async (newPassword, token) => {
  try {
    const response = await fetch(PASSWORD_REST_PASS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPassword, token }),
    });

    const data = await checkResponse(response);

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const forgotPassApi = async (email) => {
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
      return true;
    } else {
      console.error("Ошибка регистрации:", data.message);
    }
  } catch (error) {
    console.error(error);
    return;
  }
};
export const patchUser = async (data) => {
  try {
    const res = refreshTokenApi(AUTH_API, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return res;
  } catch (e) {
    return Promise.reject();
  }
};
export const getUser = async () => {
  try {
    const res = refreshTokenApi(AUTH_API, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (e) {
    return Promise.reject();
  }
};

export const logoutApi = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await fetch(LOGOUT_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    const data = await checkResponse(response);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    return data;
  } catch (error) {
    return Promise.reject();
  }
};

export const loginApi = async (email, pass) => {
  try {
    const response = await fetch(LOGIN_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: pass }),
    });

    const data = await checkResponse(response);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerApi = async (email, password, name) => {
  try {
    const response = await fetch(REGISTER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await checkResponse(response);
    return data; // Вернуть данные от API
  } catch (error) {
    console.error(error);
    throw error; // Пробросить ошибку
  }
};
