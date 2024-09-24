import { orderDetalisReducer, setArrayInrgidients } from "./orderDetalis";

const orderInfo = {
  name: "Space флюоресцентный бургер",
  order: {
    number: 18356,
  },
};

const initialState = {
  order: {},
};

const stateWithOrder = {
  order: orderInfo,
};

describe("Тестирование редьюсера информации о заказе", () => {
  test("Установка информации о заказе", () => {
    expect(
      orderDetalisReducer(initialState, setArrayInrgidients(orderInfo))
    ).toEqual(stateWithOrder);
    expect(
      orderDetalisReducer(undefined, setArrayInrgidients(orderInfo))
    ).toEqual(stateWithOrder);
  });
});
