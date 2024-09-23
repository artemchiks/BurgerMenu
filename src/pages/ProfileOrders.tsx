import React, { useEffect } from "react";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { Link, NavLink, useLocation } from "react-router-dom";
import OrderFeedCart from "../components/OrderFeedConstructor/OrderFeedCart";
import { useAppDispatch, useAppSelector } from "../hooks/hooksDispath";
import { ORDERS_SLICE } from "../service/profileOrders";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START_ORDERS,
} from "../types/actionsTypes";

const ProfileOrders = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state[ORDERS_SLICE].orders);
  console.log(orders);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START_ORDERS, payload: "/orders" });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <div className={styles["container__profile"]}>
      <div>
        <ul
          className={classNames(
            styles["container__profile-menu"],
            "text text_type_main-medium text_color_inactive"
          )}
        >
          <NavLink
            to={`/profile`}
            className={({ isActive }) =>
              isActive ? styles.link : styles.activeLink
            }
          >
            <li className={styles["container__profile-menu-li"]}>Профиль</li>
          </NavLink>
          <NavLink
            to={`/profile/orders`}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            <li className={styles["container__profile-menu-li"]}>
              История заказов
            </li>
          </NavLink>
          <li className={styles["container__profile-menu-li"]}>Выход</li>
        </ul>
        <p className={styles["container__profile-menu-chapter"]}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles["content__order-width"]}>
        {orders?.map((order) => (
          <Link
            key={order._id}
            to={`/profile/orders/${order.number}`}
            state={{ background: location }}
            className={styles["content__order-link"]}
          >
            <OrderFeedCart
              key={order._id}
              order={order}
              status={order.status}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileOrders;
