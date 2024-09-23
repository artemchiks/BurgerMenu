import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient } from "../types/type";

interface BurgerConstructorState {
  bun: Ingredient | null;
  ingridients: Ingredient[];
}

const initialState: BurgerConstructorState = {
  bun: null,
  ingridients: [],
};

export const BURGER_CONSTRUCTOR_SLICE = "burgerConstructor";
export const burgerConstructorSlice = createSlice({
  name: BURGER_CONSTRUCTOR_SLICE,
  initialState,
  reducers: {
    addIngredient: {
      reducer(state, action: PayloadAction<Ingredient>) {
        state.ingridients.push({ ...action.payload });
      },
      prepare(ingridient: Ingredient) {
        return {
          payload: { ...ingridient, key: nanoid() },
        };
      },
    },
    setBun(state, action: PayloadAction<Ingredient>) {
      state.bun = action.payload;
    },
    moveIngridient(
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) {
      const { fromIndex, toIndex } = action.payload;
      const newIngridients = [...state.ingridients];
      const [movedIngredient] = newIngridients.splice(fromIndex, 1);
      newIngridients.splice(toIndex, 0, movedIngredient);
      state.ingridients = newIngridients;
    },
    removeIngridient(state, action: PayloadAction<string>) {
      const arrCopy = [...state.ingridients];
      const indexItem = arrCopy.findIndex(
        (item) => item._id === action.payload
      );
      arrCopy.splice(indexItem, 1);
      state.ingridients = arrCopy;
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
