import { USER_API } from "../../utils/api";

export const fetchUserData = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const response = await fetch(USER_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await checkResponse(response);

    if (data.success) {
      dispatch({ type: "SET_USER_DATA", payload: data.user });
      return true;
    } else {
      console.error("Ошибка получения данных пользователя:", data.message);
      return false;
    }
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);

    let isExpired;
    if (isExpired) {
      await dispatch(refreshTokenApi());

      return fetchUserData();
    }

    return false;
  }
};
