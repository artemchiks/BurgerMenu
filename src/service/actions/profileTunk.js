import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUser, patchUser } from "../api/profileApi";
import { resetPassApi } from "../api/profileApi";
import { forgotPassApi } from "../api/profileApi";
import { logoutApi } from "../api/profileApi";
import { loginApi } from "../api/profileApi";
import { registerApi } from "./registerAcrions";

export const fetchRegister = createAsyncThunk(
  "profile/fetchRegister",
  async ({ email, password, name }, thunkApi) => {
    try {
      const res = await registerApi(email, password, name);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "profile/fetchLogin",
  async ({ email, password }, thunkApi) => {
    try {
      const res = await loginApi(email, password);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
export const fetchLogout = createAsyncThunk(
  "profile/fetchLogout",
  async (_, thunkApi) => {
    try {
      const res = await logoutApi();
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const fetchGetUser = createAsyncThunk(
  "profile/fetchGetUser",
  async (_, thunkApi) => {
    try {
      const res = await getUser();
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const fetchUpdateUser = createAsyncThunk(
  "profile/fetchUpdateUser",
  async (data, thunkApi) => {
    try {
      const res = await patchUser(data);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const fetchForgotPassword = createAsyncThunk(
  "profile/fetchForgotPassword",
  async (email, thunkApi) => {
    try {
      const res = await forgotPassApi(email);
      return res;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const fetchResetPassword = createAsyncThunk(
  "profile/fetchResetPassword",
  async (password, token, thunkApi) => {
    try {
      const res = await resetPassApi({ password, token });

      return res;
    } catch (e) {
      thunkApi.rejectWithValue(e);
    }
  }
);
