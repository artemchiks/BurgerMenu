import { checkResponse } from "../../utils/checkResponse";
import { INGRIDIENTS_URL } from "../../utils/api";
import { setIngridients } from "../ingridientListSlice";
import { AppDispatch } from "../../types/type";

export const fetchIngridients = () => async (dispatch:AppDispatch) => {
  try {
    const response = await fetch(INGRIDIENTS_URL);

    const data = await checkResponse(response);

    dispatch(setIngridients(data?.data || []));
  } catch (e) {
    console.error(e);
  }
};
