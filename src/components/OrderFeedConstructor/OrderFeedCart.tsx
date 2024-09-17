import React from "react";
import styles from "./orderFeedConstructor.module.css";
import { classNames } from "primereact/utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import { ORDERS_SLICE } from "../../service/profileOrders";

const OrderFeedCart = ({ order }: any) => {
  return (
    <div className={styles["order__carts"]}>
      <div className={"pl-5 pr-5 pb-5 pt-5"}>
        <div className={styles["order__carts-content"]}>
          <div className="order__carts-nubmer">
            <p className="text text_type_main-medium">#{order.number}</p>
          </div>
          <div className="order__carts-date">
            <p className="text text_type_main-default text_color_inactive">
              {order.updatedAt}
            </p>
          </div>
        </div>
        <div className={styles["order__carts-name"]}>
          <p className="text text_type_main-medium">{order.name}</p>
        </div>
        <div>
          <div className={styles["order__carts-content-img"]}></div>
          <div className={styles["order__carts-content-price"]}>
            <p className="text text_type_main-medium">{order.price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFeedCart;
