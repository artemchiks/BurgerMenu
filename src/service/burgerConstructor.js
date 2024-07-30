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
  },
});

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
export const { addIngridient } = burgerConstructorSlice.actions;
export const { setBun } = burgerConstructorSlice.actions;
