import React, { useEffect } from "react";
import styles from "./orderFeedConstructor.module.css";
import OrderFeedCart from "./OrderFeedCart";
import OrderFeedCompleteInfo from "./OrderFeedCompleteInfo";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksDispath";
import { ORDERS_SLICE } from "../../service/profileOrders";
import { Link, useLocation } from "react-router-dom";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../types/actionsTypes";

const OrderFeedConstructor = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state[ORDERS_SLICE].orders);
  const location = useLocation();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: "/all" });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);
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
