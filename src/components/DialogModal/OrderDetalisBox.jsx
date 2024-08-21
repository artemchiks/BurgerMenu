import React from "react";
import Modal from "./Modal";
import OrderDetails from "./OrderDetails";
import { IngredientType } from "../../utils/types";
import { useDispatch } from "react-redux";
import { clearIngridient } from "../../service/ingridientDetalis";

const OrderDetalisBox = ({ item }) => {
  return (
    <div>
      <Modal >
        <OrderDetails item={item} />
      </Modal>
    </div>
  );
};
OrderDetalisBox.propTypes = {
  IngredientType,
};
export default OrderDetalisBox;
