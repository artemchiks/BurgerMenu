import { createSlice } from "@reduxjs/toolkit";

export const INGRIDIENT_LIST_SLICE = "ingridientList";
export const ingridientListSlice = createSlice({
  name: INGRIDIENT_LIST_SLICE,
  initialState: [],
  reducers: {
    setIngridients(state, action) {
      return action.payload;
    },
  },
});

export const ingridientListReducer = ingridientListSlice.reducer;
export const { setIngridients } = ingridientListSlice.actions;
