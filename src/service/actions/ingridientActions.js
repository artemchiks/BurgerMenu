import { checkResponse } from "../../components/checkResponse";
import { INGRIDIENTS_URL } from "../../components/pathUrl";
import { setIngridients } from "../../service/ingridientListSlice";

export const fetchIngridients = () => async (dispatch) => {
  try {
    const response = await fetch(INGRIDIENTS_URL);
    checkResponse(response);
    const data = await response.json();
    dispatch(setIngridients(data?.data || []));
  } catch (error) {
    console.log(error);
  }
};
