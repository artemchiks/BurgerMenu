import { createSlice } from "@reduxjs/toolkit";


export const INGRIDIENT_DETALIS_SLICE = "ingridientDetalis";
export const ingridientDetalisSlice = createSlice({
  name: INGRIDIENT_DETALIS_SLICE,
  initialState: null,
  reducers: {
    setIngridient(state, action) {
      return action.payload;
    },
    clearIngridient() {
      return null;
    },
  },
});

export const ingridientDetalisReducer = ingridientDetalisSlice.reducer;
export const { setIngridient, clearIngridient } =
  ingridientDetalisSlice.actions;
