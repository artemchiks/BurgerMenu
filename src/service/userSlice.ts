import { createSlice } from "@reduxjs/toolkit";

export type User = {
  email: string;
  name: string;
}

export const USER_SLICE = "userSlice";
export const userSlice = createSlice({
  name: USER_SLICE,
  initialState: null as User | null,
  reducers: {
    setUser(state, action) {
      return {
        email: action.payload.email,
        name: action.payload.name,
      };
    },
    logout(state) {
      return null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, logout } = userSlice.actions;
