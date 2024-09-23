import React, { useEffect } from "react";
import DialogFeed from "../components/DialogModal/DialogFeed";
import styles from "./singleСlass.module.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooksDispath";
import { ORDERS_SLICE } from "../service/profileOrders";
import { ordersFeedApi } from "../service/actions/ordersFeedActions";
const Order = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const order = useAppSelector((state) =>
    state[ORDERS_SLICE].orders.find((o) => o.number === Number(id))
  );

  useEffect(() => {
    dispatch(ordersFeedApi(Number(id)));
  }, [id, dispatch]);

  if (!order) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={styles["page__dialog-feed"]}>
      <DialogFeed />
    </div>
  );
};

export default Order;
