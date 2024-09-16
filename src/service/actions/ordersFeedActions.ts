import { AppDispatch } from "../../types/type";
import { WS_URL } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import { setOrders } from "../profileOrders";


export interface Response {
  success?: boolean;
  error?: string;
  data?: []; 
}
export const ordersFeedApi = (orders: [{}]) => {
return async (dispatch: AppDispatch): Promise<Response> => {
    try {
      const response = await fetch(WS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orders }),
      });

      const data = await checkResponse(response);

      if (data.success) {
        dispatch(setOrders(data)); // Обновление состояния в хранилище
        return { success: true, data };
      } else {
        return {
          error: `Ошибка получения данных: ${data.message}`,
        };
      }
    } catch (e) {
      return {
        error: "Произошла ошибка при получении данных. Пожалуйста, попробуйте еще раз.",
      };
    }
  };
};