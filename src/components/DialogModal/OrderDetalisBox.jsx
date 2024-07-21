import React from "react";
import Modal from "./Modal";
import OrderDetails from "./OrderDetails";
import { IngredientType } from "../../utils/types";

const OrderDetalisBox = ({ active, setActive, item }) => {
  return (
    <div>
      <Modal active={active} setActive={setActive}>
        <OrderDetails item={item} />
      </Modal>
    </div>
  );
};
OrderDetalisBox.propTypes = {
  IngredientType,
};
export default OrderDetalisBox;
