import { createAsyncThunk } from "@reduxjs/toolkit";
import { ORDERS_URL } from "../../components/pathUrl";
import { checkResponse } from "../../components/checkResponse";
import { useSelector } from "react-redux";
import { BURGER_CONSTRUCTOR_SLICE } from "../burgerConstructor";

export const createOrderApi = createAsyncThunk(
  "orders/createOrder",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const data = state[BURGER_CONSTRUCTOR_SLICE];

    if (!data.bun?._id) {
      return thunkAPI.rejectWithValue("Булка не выбрана");
    }

    try {
      const idIngridients = data.ingridients.map((item) => item._id);
      const response = await fetch(ORDERS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients: [data.bun._id, ...idIngridients, data.bun._id],
        }),
      });

      checkResponse(response);
      const app = await response.json();
      return app;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
