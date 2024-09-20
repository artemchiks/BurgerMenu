import { AppDispatch, Order } from "../../types/type";
import { ORDERS_URL } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import { setOrders } from "../profileOrders";



export interface Response {
  success?: boolean;
  error?: string;
  data?: {
    orders: Order[];
    total: number;
    totalToday: number;
  };
}

export const ordersFeedApi = (orderId?: number) => {
  return async (dispatch: AppDispatch): Promise<Response> => {
    try {
      const response = await fetch(`${ORDERS_URL}${orderId ? `/${orderId}` : ''}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await checkResponse(response);
      console.log(data);

      if (data.success) {
        dispatch(setOrders(data));
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