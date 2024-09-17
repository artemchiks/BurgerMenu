import React, { useEffect } from "react";
import styles from "./orderFeedConstructor.module.css";
import OrderFeedCart from "./OrderFeedCart";
import OrderFeedCompleteInfo from "./OrderFeedCompleteInfo";
import { checkResponse } from "../../utils/checkResponse";
import { useAppDispatch } from "../../hooks/hooksDispath";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import { ORDERS_SLICE } from "../../service/profileOrders";

const OrderFeedConstructor = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector((state: RootState) => state[ORDERS_SLICE].orders);
  console.log(orders);

  useEffect(() => {
    dispatch({ type: "WS_CONNECTION_START" });
    return () => {};
  }, []);

  return (
    <div className={styles["order"]}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={styles["content__order"]}>
        <div className={styles["content__order-detalis"]}>
          {orders.map((order) => (
            <OrderFeedCart key={order._id} order={order} />
          ))}
        </div>
        <div>
          <OrderFeedCompleteInfo />
        </div>
      </div>
    </div>
  );
};

export default OrderFeedConstructor;
