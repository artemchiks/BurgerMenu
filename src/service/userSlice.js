import { createSlice } from "@reduxjs/toolkit";

export const USER_SLICE = "userSlice";
export const userSlice = createSlice({
  name: USER_SLICE,
  initialState: { email: null, password: null, name: null },
  reducers: {
    setUsers(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.token;
      state.name = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.password = null;
      state.name = null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUsers, removeUser } = userSlice.actions;
