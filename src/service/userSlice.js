import { createSlice } from "@reduxjs/toolkit";

export const USER_SLICE = "userSlice";
export const userSlice = createSlice({
  name: USER_SLICE,
  initialState: { email: null, name: null },
  reducers: {
    setUsers(state, action) {
      return {
        email: action.payload.email,
        name: action.payload.name,
      };
    },
    removeUser() {
      return { email: null, name: null };
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUsers, removeUser } = userSlice.actions;
