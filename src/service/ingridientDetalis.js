import { createSlice } from "@reduxjs/toolkit";

export const INGRIDIENT_DETALIS_SLICE = "ingridientDetalis";
export const ingridientDetalisSlice = createSlice({
  name: INGRIDIENT_DETALIS_SLICE,
  initialState: {
    calories: [],
  },
  reducers: {
    setCalories(state, action) {
      return { ...state, calories: [...state.calories, action.payload] };
    },
  },
});

export const ingridientDetalisReducer = ingridientDetalisSlice.reducer;
export const { setCalories } = ingridientDetalisSlice.actions;
export const { setItem } = ingridientDetalisSlice.actions;
