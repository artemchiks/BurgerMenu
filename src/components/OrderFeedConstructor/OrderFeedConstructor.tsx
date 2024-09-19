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
import { Link, useLocation } from "react-router-dom";

const OrderFeedConstructor = () => {
  const dispatch = useAppDispatch();
  const orders = useSelector((state: RootState) => state[ORDERS_SLICE].orders);
  const location = useLocation();
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
            <Link
              key={order._id}
              to={`/feed/${order.number}`}
              state={{ background: location }}
              className={styles["content__order-link"]}
            >
              <div>
                <OrderFeedCart order={order} />
              </div>
            </Link>
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
