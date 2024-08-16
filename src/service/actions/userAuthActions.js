import { checkResponse } from "../../components/checkResponse";
import { USER_API } from "../../utils/api";
import { setUser } from "../userSlice";
import { refreshTokenApi } from "./refreshTokenApi";

export const fetchUserData = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return;
    }

    const request = async () =>
      fetch(USER_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("accessToken"),
        },
      });

    let response = await request(accessToken);

    if (response.status === 403) {
      const isRefreshSuccess = await dispatch(refreshTokenApi());
      if (!isRefreshSuccess) {
        return false;
      }
      response = await request();
    }

    const data = await checkResponse(response);

    if (data.success) {
      const { user } = data;
      dispatch(setUser(user));
    } else {
      console.error("Ошибка получения данных пользователя:", data.message);
    }
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
  }
};
export const fetchUpdateUserData =
  (email, name, password) => async (dispatch) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        return;
      }

      const request = async () =>
        fetch(USER_API, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("accessToken"),
          },
          body: JSON.stringify({ email, password, name }),
        });

      let response = await request(accessToken);

      if (response.status === 403) {
        const isRefreshSuccess = await dispatch(refreshTokenApi());
        if (!isRefreshSuccess) {
          return false;
        }
        response = await request();
      }

      const data = await checkResponse(response);

      if (data.success) {
        dispatch(setUser({ email, name }));
      } else {
        console.error("Ошибка получения данных пользователя:", data.message);
      }
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    }
  };
