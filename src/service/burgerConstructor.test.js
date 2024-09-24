import {
  burgerConstructorReducer,
  addIngredient,
  setBun,
  moveIngridient,
  removeIngridient,
  resetConstructor,
  initialState,
} from "./burgerConstructor";

const bunDetails = {
  _id: "60666c42cc7b410027a1a9ba",
  name: "Соус с шипами Антарианского плоскоходца",
  type: "sauce",
  proteins: 101,
  fat: 99,
  carbohydrates: 100,
  calories: 100,
  price: 88,
  image: "https://code.s3.yandex.net/react/code/sauce-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
  __v: 0,
};

const middle = {
  _id: "60666c42cc7b410027a1a9bf",
  name: "Сыр с астероидной плесенью",
  type: "main",
  proteins: 84,
  fat: 48,
  carbohydrates: 420,
  calories: 3377,
  price: 4142,
  image: "https://code.s3.yandex.net/react/code/cheese.png",
  image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
  __v: 0,
};

const middleList = [
  {
    _id: "60666c42cc7b410027a1a9b2",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
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
    image: "https://code.s3.yandex.net/react/code/cheese.png",
    image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
    __v: 0,
  },
];

describe("Тестирование редьюсера конструктора бургера", () => {
  test("Добавление ингредиента", () => {
    const newState = burgerConstructorReducer(
      initialState,
      addIngredient(middle)
    );
    expect(newState.ingridients).toHaveLength(1);
    expect(newState.ingridients[0]).toMatchObject(middle);
  });

  test("Установка булки", () => {
    const newState = burgerConstructorReducer(initialState, setBun(bunDetails));
    expect(newState.bun).toEqual(bunDetails);
  });

  test("Перемещение ингредиента", () => {
    const stateWithIngredients = {
      ...initialState,
      ingridients: middleList,
    };
    const newState = burgerConstructorReducer(
      stateWithIngredients,
      moveIngridient({ fromIndex: 0, toIndex: 1 })
    );
    const expectedState = [...middleList];
    [expectedState[0], expectedState[1]] = [expectedState[1], expectedState[0]];
    expect(newState.ingridients).toEqual(expectedState);
  });

  test("Удаление ингредиента", () => {
    const stateWithIngredients = {
      ...initialState,
      ingridients: middleList,
    };
    const newState = burgerConstructorReducer(
      stateWithIngredients,
      removeIngridient(middleList[0]._id)
    );
    expect(newState.ingridients).toHaveLength(middleList.length - 1);
  });

  test("Сброс конструктора", () => {
    const stateWithIngredients = {
      bun: bunDetails,
      ingridients: middleList,
    };
    const newState = burgerConstructorReducer(
      stateWithIngredients,
      resetConstructor()
    );
    expect(newState).toEqual({
      bun: null,
      ingridients: [],
    });
  });
});
