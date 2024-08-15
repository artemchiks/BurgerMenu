// import { checkResponse } from "../../components/checkResponse";
// import { USER_API } from "../../utils/api";
// import { getCookie } from "../../utils/cookie";
// import { refreshTokenApi } from "../api/refreshTokenApi";

// export const fetchUserData = () => async (dispatch) => {
//   try {
//     const response = await fetch(USER_API, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + getCookie("token"),
//       },
//     });

//     const data = await checkResponse(response);

//     if (data.success) {
//       dispatch({ type: "SET_USER_DATA", payload: data.user });
//       return data;
//     } else {
//       console.error("Ошибка получения данных пользователя:", data.message);
//       return false;
//     }
//   } catch (error) {
//     console.error("Ошибка при получении данных пользователя:", error);

//     let isExpired;
//     if (isExpired) {
//       await dispatch(refreshTokenApi());

//       return fetchUserData();
//     }

//     return false;
//   }
// };
