import { WS_GET_MESSAGE } from "../types/actionsTypes";
import { ordersReducer, setOrders } from "./profileOrders";

const ordersInfo = {
  success: true,
  orders: [
    {
      _id: "64f8f5f5f5f5f5f5f5f5f5f",
      ingredients: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733c7"],
      status: "done",
      name: "Space флюоресцентный бургер",
      createdAt: "2023-08-30T19:03:14.142Z",
      updatedAt: "2023-08-30T19:03:14.142Z",
      number: 18367,
    },
  ],
  total: 17994,
  totalToday: 100,
};

const initialState = {
  orders: [],
  total: 0,
  totalToday: 0,
  success: false, 
};

const stateWithOrders = {
  orders: ordersInfo.orders,
  total: ordersInfo.total,
  totalToday: ordersInfo.totalToday,
  success: true, 
};

describe("Тестирование редьюсера информации о заказах", () => {
  test("Установка информации о заказах", () => {
    expect(ordersReducer(initialState, setOrders(ordersInfo))).toEqual(
      stateWithOrders
    );
    expect(ordersReducer(undefined, setOrders(ordersInfo))).toEqual(
      stateWithOrders
    );
  });

  test("Получение сообщения через WebSocket", () => {
    expect(
      ordersReducer(initialState, { type: WS_GET_MESSAGE, payload: ordersInfo })
    ).toEqual(stateWithOrders);
    expect(
      ordersReducer(undefined, { type: WS_GET_MESSAGE, payload: ordersInfo })
    ).toEqual(stateWithOrders);
  });
});
