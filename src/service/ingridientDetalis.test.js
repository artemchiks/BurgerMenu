import {
  ingridientDetalisReducer,
  setIngridient,
  clearIngridient,
} from "./ingridientDetalis";

describe("Тестирование редьюсера ingridientDetalis", () => {
  const initialState = null;

  test("Должен установить ингредиент", () => {
    const ingridient = {
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
    };

    const newState = ingridientDetalisReducer(
      initialState,
      setIngridient(ingridient)
    );
    expect(newState).toEqual(ingridient);
  });

  test("Должен очистить ингредиент", () => {
    const stateWithIngridient = {
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
    };

    const newState = ingridientDetalisReducer(
      stateWithIngridient,
      clearIngridient()
    );
    expect(newState).toBeNull();
  });
});
