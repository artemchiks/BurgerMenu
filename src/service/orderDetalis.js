import { createSlice } from "@reduxjs/toolkit";

export const ORDER_DETALIS_SLICE = "orderDetalis";
export const orderDetalisSlice = createSlice({
  name: ORDER_DETALIS_SLICE,
  initialState: { order: null },
  reducers: {
    setArrayInrgidients(state, action) {
      return { ...state, order: action.payload };
    },
  },
});

export const orderDetalisReducer = orderDetalisSlice.reducer;
export const { setArrayInrgidients } = orderDetalisSlice.actions;
