import { ingridientListReducer, setIngridients } from "./ingridientListSlice";

describe("Тестирование редьюсера ingridientList", () => {
  const initialState = [];

  test("Должен установить список ингредиентов", () => {
    const ingridients = [
      {
        _id: "60666c42cc7b410027a1a9b2",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "http://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "http://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "http://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0,
      },
      {
        _id: "60666c42cc7b410027a1a9bf",
        name: "Сыр с астероидной плесенью",
        type: "main",
        proteins: 84,
        fat: 48,
        carbohydrates: 420,
        calories: 3377,
        price: 4142,
        image: "http://code.s3.yandex.net/react/code/cheese.png",
        image_mobile: "http://code.s3.yandex.net/react/code/cheese-mobile.png",
        image_large: "http://code.s3.yandex.net/react/code/cheese-large.png",
        __v: 0,
      },
    ];

    const newState = ingridientListReducer(
      initialState,
      setIngridients(ingridients)
    );
    expect(newState).toEqual(ingridients);
  });
});
