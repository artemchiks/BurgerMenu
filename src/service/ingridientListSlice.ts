import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ingredient } from "../types/type";

type IngridientsList = Ingredient[];

const initialState: IngridientsList = [];

export const INGRIDIENT_LIST_SLICE = "ingridientList";
export const ingridientListSlice = createSlice({
  name: INGRIDIENT_LIST_SLICE,
  initialState,
  reducers: {
    setIngridients(state, action: PayloadAction<[]>) {
      return action.payload;
    },
  },
});

export const ingridientListReducer = ingridientListSlice.reducer;
export const { setIngridients } = ingridientListSlice.actions;
