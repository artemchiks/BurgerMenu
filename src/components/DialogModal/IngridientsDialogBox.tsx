import React, { FC } from "react";
import Modal from "./Modal";
import IngredientDetails from "./IngredientDetails";
import { clearIngridient } from "../../service/ingridientDetalis";
import { useAppDispatch } from "../../hooks/hooksDispath";

const IngridientsDialogBox= () => {
  const dyspatch = useAppDispatch();
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
