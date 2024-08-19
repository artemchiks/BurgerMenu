import React from "react";
import { useSelector } from "react-redux";

import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";

import IngredientDetails from "../DialogModal/IngredientDetails";
import { INGRIDIENT_DETALIS_SLICE } from "../../service/ingridientDetalis";
const IngridinetPage = (setActive, active) => {
  const loaded = useSelector((state) => state[INGRIDIENT_DETALIS_SLICE]);
  console.log(loaded);
  return (
    <div className="centerHV">
      {loaded && <IngredientDetails data={loaded} />}
    </div>
  );
};

export default IngridinetPage;
