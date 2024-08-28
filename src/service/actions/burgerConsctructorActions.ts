import { createAsyncThunk } from "@reduxjs/toolkit";
import { ORDERS_URL } from "../../utils/api";
import { checkResponse } from "../../utils/checkResponse";
import { useSelector } from "react-redux";
import {
  BURGER_CONSTRUCTOR_SLICE,
  resetConstructor,
} from "../burgerConstructor";
import { setArrayInrgidients } from "../orderDetalis";
import { AppDispatch, CreateOrderResponse, RootState } from "../../types/type";

export const createOrderApi = () => {
  return async (
    dispatch: AppDispatch,
    getState: () => RootState
  ): Promise<boolean | null> => {
    try {
      const state = getState();
      const data = state[BURGER_CONSTRUCTOR_SLICE];

      if (!data.bun?._id) {
        return null;
      }

      const idIngredients = data.ingridients.map((item) => item._id);

      const response = await fetch(ORDERS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients: [data.bun._id, ...idIngredients, data.bun._id],
        }),
      });

      const app = await checkResponse(response);

      if (app) {
        dispatch(setArrayInrgidients(app.order.number));
        dispatch(resetConstructor(""));
        return app;
      }
    } catch (e) {
      console.error(e);
    }

    return null;
  };
};
