import { checkResponse } from "../../utils/checkResponse";
import { INGRIDIENTS_URL } from "../../utils/api";
import { setIngridients } from "../../service/ingridientListSlice";

export const fetchIngridients = () => async (dispatch) => {
  const response = await fetch(INGRIDIENTS_URL);

  const data = await checkResponse(response);

  dispatch(setIngridients(data?.data || []));
};
