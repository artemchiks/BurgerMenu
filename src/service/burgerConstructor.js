import { createSlice, nanoid } from "@reduxjs/toolkit";

export const BURGER_CONSTRUCTOR_SLICE = "burgerConstructor";
export const burgerConstructorSlice = createSlice({
  name: BURGER_CONSTRUCTOR_SLICE,
  initialState: { bun: null, ingridients: [] },
  reducers: {
    addIngridient(state, action) {
      state.ingridients.push(action.payload);
    },
    addTodo: {
      reducer(state, action) {
        state.ingridients.push({ ...action.payload, id: nanoid() });
      },
      prepare(ingridients) {
        return {
          payload: { ...ingridients, id: nanoid() },
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
  addIngridient,
  moveIngridient,
  setBun,
  removeIngridient,
  resetConstructor,
  addTodo,
} = burgerConstructorSlice.actions;
