// import { checkResponse } from "../../components/checkResponse";
// import { LOGOUT_API } from "../../utils/api";

// export const logoutApi = () => async (dispatch) => {
//   try {
//     const refreshToken = localStorage.getItem("refreshToken");

//     const response = await fetch(LOGOUT_API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ token: refreshToken }),
//     });

//     const data = await checkResponse(response);

//     if (data.success) {
//       dispatch({ type: "LOGOUT" });
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");

//       return true;
//     } else {
//       console.error("Ошибка выхода:", data.message);
//       return false;
//     }
//   } catch (error) {
//     console.error("Ошибка при выходе:", error);
//     return false;
//   }
// };
