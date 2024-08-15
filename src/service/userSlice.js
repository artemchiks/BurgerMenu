import { createSlice } from "@reduxjs/toolkit";

import {
  ACCESS_TOKEN,
  EXIST_EMAIL_MESSAGE,
  FORGOT_PASSWORD_MESSAGE,
  LOGIN_ERROR_MESSAGE,
  REFRESH_TOKEN,
  RESET_PASSWORD_MESSAGE,
  USER_UPDATE_ERROR_MESSAGE,
} from "../utils/api";

import {
  fetchForgotPassword,
  fetchLogin,
  fetchLogout,
  fetchRegister,
  fetchResetPassword,
} from "./actions/profileTunk";

export const USER_SLICE = "userSlice";
export const userSlice = createSlice({
  name: USER_SLICE,
  initialState: {
    isLoaderPage: true,
    profilePending: false,
    isLogin: false,
    isSentEmailForResetPassword: false,
    email: "",
    name: "",
    message: "",
    accessToken: "",
    errorMessage: "",
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearErrorMessage(state) {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state, action) => {
        state.profilePending = true;
        state.message = "";
        state.errorMessage = "";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.profilePending = false;
        state.isLogin = true;
        state.email = action.payload.user.email;
        state.name = action.payload.user.name;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
        localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.profilePending = false;
        if (action.payload.message === "User already exists") {
          state.errorMessage = EXIST_EMAIL_MESSAGE;
        } else {
          console.log(action.payload);
          state.errorMessage = action.payload.message;
        }
      })

      .addCase(fetchLogin.pending, (state) => {
        state.profilePending = true;
        state.message = "";
        state.errorMessage = "";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLogin = true;
        state.profilePending = false;
        state.email = action.payload.user.email;
        state.name = action.payload.user.name;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem(REFRESH_TOKEN, action.payload.refreshToken);
        localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        console.log(action.payload);
        state.profilePending = false;
        if (action.payload.message === "email or password are incorrect") {
          state.errorMessage = LOGIN_ERROR_MESSAGE;
        } else {
          state.errorMessage = action.payload.message;
        }
      })

      .addCase(fetchLogout.pending, (state) => {
        state.profilePending = true;
        state.message = "";
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.profilePending = false;
        state.isLogin = false;
        state.email = "";
        state.name = "";
        state.accessToken = "";
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        console.log(action.payload);
        state.profilePending = false;
      })

      // .addCase(fetchGetUser.pending, (state) => {
      //   state.profilePending = true;
      //   state.message = "";
      // })
      // .addCase(fetchGetUser.fulfilled, (state, action) => {
      //   state.isLoaderPage = false;
      //   state.profilePending = false;
      //   state.isLogin = true;
      //   state.accessToken = localStorage.getItem(ACCESS_TOKEN);
      //   state.email = action.payload.user.email;
      //   state.name = action.payload.user.name;
      // })
      // .addCase(fetchGetUser.rejected, (state, action) => {
      //   console.log(action.payload);
      //   state.isLoaderPage = false;
      //   state.profilePending = false;
      // })

      // .addCase(fetchUpdateUser.pending, (state) => {
      //   state.profilePending = true;
      //   state.message = "";
      //   state.errorMessage = "";
      // })
      // .addCase(fetchUpdateUser.fulfilled, (state, action) => {
      //   state.name = action.payload.user.name;
      //   state.email = action.payload.user.email;
      //   state.profilePending = false;
      // })
      // .addCase(fetchUpdateUser.rejected.type, (state, action) => {
      //   state.profilePending = false;
      //   state.errorMessage = USER_UPDATE_ERROR_MESSAGE;
      //   console.log(action.payload);
      // })

      .addCase(fetchForgotPassword.pending, (state) => {
        state.profilePending = true;
        state.message = "";
      })
      .addCase(fetchForgotPassword.fulfilled, (state, action) => {
        state.isSentEmailForResetPassword = true;
        state.message = FORGOT_PASSWORD_MESSAGE;
        state.profilePending = false;
      })
      .addCase(fetchForgotPassword.rejected, (state, action) => {
        console.log(action.payload);
        state.profilePending = false;
      })

      .addCase(fetchResetPassword.pending, (state) => {
        state.profilePending = true;
      })
      .addCase(fetchResetPassword.fulfilled, (state, action) => {
        state.profilePending = false;
        state.isSentEmailForResetPassword = false;
        state.message = RESET_PASSWORD_MESSAGE;
      })
      .addCase(fetchResetPassword.rejected, (state, action) => {
        state.profilePending = false;
        console.log(action.payload);
      });
  },
});

export const userReducer = userSlice.reducer;

export const profileActions = userSlice.actions;
