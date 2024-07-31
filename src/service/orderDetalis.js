import { createSlice } from "@reduxjs/toolkit";

export const ORDER_DETALIS_SLICE = "orderDetalis";
export const orderDetalisSlice = createSlice({
  name: ORDER_DETALIS_SLICE,
  initialState: [],
  reducers: {
    setIngridients(state, action) {
      return action.payload;
    },
  },
});

export const orderDetalisReducer = orderDetalisSlice.reducer;
export const { setIngridients } = orderDetalisSlice.actions;
