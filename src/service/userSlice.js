import { createSlice } from "@reduxjs/toolkit";

export const USER_SLICE = "userSlice";
export const userSlice = createSlice({
  name: USER_SLICE,
  initialState: null,
  reducers: {
    setUser(state, action) {
      return {
        email: action.payload.email,
        name: action.payload.name,
      };
    },
    logout() {
      return null;
    },
    lsAuthCheked() {
      return false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, logout, isAuth, lsAuthCheked } = userSlice.actions;
