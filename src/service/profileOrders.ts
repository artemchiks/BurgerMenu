import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WS_GET_MESSAGE } from "../types/actionsTypes";
import { Order } from "../types/type";




interface OrdersState {
  success: boolean;
  orders: Order[];
  total: number;
  totalToday: number;
}

const initialState: OrdersState = {
  success: false,
  orders: [],
  total: 0,
  totalToday: 0,
};
  
  export const ORDERS_SLICE = "ordersSlice";
  export const ordersSlice = createSlice({
    name: ORDERS_SLICE,
    initialState,
    reducers: {
      setOrders(state, action: PayloadAction<OrdersState>) {
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
        state.success = action.payload.success; 
      },
    },
    extraReducers: (builder) => {
      builder.addCase(WS_GET_MESSAGE as string, (state, action: PayloadAction<OrdersState>) => {
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
        state.success = action.payload.success;
      });
    }
  });
  
  export const ordersReducer = ordersSlice.reducer;
  export const { setOrders } = ordersSlice.actions;