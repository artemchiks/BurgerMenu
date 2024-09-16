import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        return action.payload;
      },
      clearOrders(state) {
        state.success = false;
        state.orders = [];
        state.total = 0;
        state.totalToday = 0;
      },
    },
  });
  
  export const ordersReducer = ordersSlice.reducer;
  export const { setOrders, clearOrders } = ordersSlice.actions;