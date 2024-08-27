import { checkResponse } from "../../utils/checkResponse";
import { USER_API } from "../../utils/api";
import { setUser } from "../userSlice";
import { refreshTokenApi } from "./refreshTokenApi";
import { AppDispatch } from "../../types/type";
import { UserInfo } from "os";

export const fetchUserData = () => async (dispatch:AppDispatch): Promise<void | boolean> => {
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
          Authorization: accessToken,
        },
      });

    let response = await request();

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
  } catch (e) {
    console.error("Произошла ошибка", e);
  }
};
export const fetchUpdateUserData =
  (email:string, name:string, password:string) => async (dispatch:AppDispatch): Promise<void | boolean> => {
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
            Authorization: accessToken,
          },
          body: JSON.stringify({ email, password, name }),
        });

      let response = await request();

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
    } catch (e) {
      console.error("Произошла ошибка", e);
    }
  };
