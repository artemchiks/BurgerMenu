import React, { useEffect } from "react";
import styles from "./orderFeedConstructor.module.css";
import OrderFeedCart from "./OrderFeedCart";
import OrderFeedCompleteInfo from "./OrderFeedCompleteInfo";
import { checkResponse } from "../../utils/checkResponse";
import { useAppDispatch } from "../../hooks/hooksDispath";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import { ORDERS_SLICE } from "../../service/profileOrders";
import DraggableOrdes from "./DraggableOrdes";

const OrderFeedConstructor = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector((state: RootState) => state[ORDERS_SLICE].orders);

  useEffect(() => {
    dispatch({ type: "WS_CONNECTION_START" });
    return () => {};
  }, []);

  return (
    <div className={styles["order"]}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={styles["content__order"]}>
        <div>
          {orders.map((order) => (
            <DraggableOrdes key={order._id} items={order}>
              <div key={order._id}>
                <OrderFeedCart order={order} />
              </div>
            </DraggableOrdes>
          ))}
        </div>
        <div>
          <OrderFeedCompleteInfo orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default OrderFeedConstructor;
