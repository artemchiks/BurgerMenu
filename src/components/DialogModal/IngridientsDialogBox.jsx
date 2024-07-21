import React from "react";
import Modal from "./Modal";
import IngredientDetails from "./IngredientDetails";

const IngridientsDialogBox = ({ active, setActive, item }) => {
  return (
    <>
      <Modal active={active} setActive={setActive} title={"Детали ингридиента"}>
        <IngredientDetails item={item} />
      </Modal>
    </>
  );
};

export default IngridientsDialogBox;
