import { createSlice } from "@reduxjs/toolkit";

export const BURGER_CONSTRUCTOR_SLICE = "burgerConstructor";
export const burgerConstructorSlice = createSlice({
  name: BURGER_CONSTRUCTOR_SLICE,
  initialState: { bun: null, ingridients: [] },
  reducers: {
    addIngridient(state, action) {
      return { ...state, ingridients: [...state.ingridients, action.payload] };
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
  },
});

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
export const { addIngridient, moveIngridient, setBun, removeIngridient } =
  burgerConstructorSlice.actions;
