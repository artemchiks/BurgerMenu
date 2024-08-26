import React, { FC } from "react";
import Modal from "./Modal";
import IngredientDetails from "./IngredientDetails";
import { useDispatch } from "react-redux";
import { clearIngridient } from "../../service/ingridientDetalis";

const IngridientsDialogBox= () => {
  const dyspatch = useDispatch();
  const handleClose = () => {
    dyspatch(clearIngridient());
  };
  return (
    <>
      <Modal
        title={"Детали ингридиента"}
        onClose={handleClose}
      >
        <IngredientDetails />
      </Modal>
    </>
  );
};

export default IngridientsDialogBox;
