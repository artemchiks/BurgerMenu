import { createAsyncThunk } from "@reduxjs/toolkit";
import { ORDERS_URL } from "../../components/pathUrl";
import { checkResponse } from "../../components/checkResponse";
import { useSelector } from "react-redux";
import { BURGER_CONSTRUCTOR_SLICE } from "../burgerConstructor";

export const createOrderApi = () => async (dispatch, getState) => {
  const state = getState();
  const data = state[BURGER_CONSTRUCTOR_SLICE];

  if (!data.bun?._id) {
    console.error("Булка не выбрана");
    return;
  }

  try {
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
    return app;
  } catch (error) {
    console.error(error);
    return;
  }
};
