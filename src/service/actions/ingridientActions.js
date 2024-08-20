import { checkResponse } from "../../components/checkResponse";
import { INGRIDIENTS_URL } from "../../utils/api";
import { setIngridients } from "../../service/ingridientListSlice";

export const fetchIngridients = () => async (dispatch) => {
  try {
    const response = await fetch(INGRIDIENTS_URL);

    const data = await checkResponse(response);
    console.log(data);
    dispatch(setIngridients(data?.data || []));
  } catch (error) {
    console.log(error);
  }
};
