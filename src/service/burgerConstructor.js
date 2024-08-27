import { createSlice, nanoid } from "@reduxjs/toolkit";

export const BURGER_CONSTRUCTOR_SLICE = "burgerConstructor";
export const burgerConstructorSlice = createSlice({
  name: BURGER_CONSTRUCTOR_SLICE,
  initialState: { bun: null, ingridients: [] },
  reducers: {
    addIngredient: {
      reducer(state, action) {
        state.ingridients.push({ ...action.payload });
      },
      prepare(ingridient) {
        return {
          payload: { ...ingridient, key: nanoid() },
        };
      },
    },
    setBun(state, action) {
      return { ...state, bun: action.payload };
    },
    moveIngridient(state, action) {
      const { fromIndex, toIndex } = action.payload;
      const newIngridients = [...state.ingridients];
      const [movedIngredient] = newIngridients.splice(fromIndex, 1);
      newIngridients.splice(toIndex, 0, movedIngredient);
      return { ...state, ingridients: newIngridients };
    },
    removeIngridient(state, action) {
      const arrCopy = [...state.ingridients];
      const indexItem = arrCopy.findIndex((item) => {
        return item._id === action.payload;
      });
      arrCopy.splice(indexItem, 1);
      return {
        ...state,
        ingridients: arrCopy,
      };
    },
    resetConstructor(state) {
      state.bun = null;
      state.ingridients = [];
    },
  },
});

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
export const {
  moveIngridient,
  setBun,
  removeIngridient,
  resetConstructor,
  addIngredient,
} = burgerConstructorSlice.actions;
