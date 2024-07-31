import React from "react";
import Modal from "./Modal";
import IngredientDetails from "./IngredientDetails";

const IngridientsDialogBox = ({ active, setActive }) => {
  return (
    <>
      <Modal active={active} setActive={setActive} title={"Детали ингридиента"}>
        <IngredientDetails />
      </Modal>
    </>
  );
};

export default IngridientsDialogBox;
