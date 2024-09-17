import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WS_GET_MESSAGE } from "../types/actionsTypes";

interface Order {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

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
      },
    },
    extraReducers: (builder) => {
      builder.addCase(WS_GET_MESSAGE as any, (state, action: PayloadAction<OrdersState>) => {
        state.orders = action.payload.orders;
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
      });
    }
  });
  
  export const ordersReducer = ordersSlice.reducer;
  export const { setOrders } = ordersSlice.actions;