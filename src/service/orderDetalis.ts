import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const ORDER_DETALIS_SLICE = "orderDetalis";
interface OrderState {
  order: {}; 
}

const initialState: OrderState = {
  order: {},
};

export const orderDetalisSlice = createSlice({
  name: ORDER_DETALIS_SLICE,
  initialState,
  reducers: {
    setArrayInrgidients(state, action: PayloadAction<{}>) { 
      state.order = action.payload;
    },
  },
});
export const orderDetalisReducer = orderDetalisSlice.reducer;
export const { setArrayInrgidients } = orderDetalisSlice.actions;
