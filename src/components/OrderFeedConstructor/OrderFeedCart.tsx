import React, { useMemo } from "react";
import styles from "./orderFeedConstructor.module.css";
import { classNames } from "primereact/utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { RootState } from "../../service/store";
import { ORDERS_SLICE } from "../../service/profileOrders";
import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";
import moment from "moment";
import { getDateDiff } from "../../utils/datetime";

const OrderFeedCart = ({ order, status }: any) => {
  const ingridients = useSelector(
    (state: RootState) => state[INGRIDIENT_LIST_SLICE]
  );

  const tooltipOverflow =
    order.ingredients.length - 6 > 0 ? order.ingredients.length - 6 : 0;

  const imgs = useMemo(
    () =>
      (order.ingredients as string[])
        .slice(0, 6)
        .map(
          (ingridientId) =>
            ingridients.find((ing) => ing._id === ingridientId)?.image
        ),
    [order.ingridients]
  );

  const price = useMemo(
    () =>
      (order.ingredients as string[]).reduce((acc, ingridientId) => {
        acc += ingridients.find((ing) => ing._id === ingridientId)?.price || 0;
        return acc;
      }, 0),
    [order.ingredients]
  );

  const orderCreatedTime = useMemo(() => {
    const daysDiff = getDateDiff(order.createdAt);
    const time = moment(order.createdAt).format("HH:mm");

    return `${daysDiff}, ${time}`;
  }, [order.createdAt]);

  return (
    <div className={styles["order__carts"]}>
      <div className={"pl-5 pr-5 pb-5 pt-5"}>
        <div className={styles["order__carts-content"]}>
          <div className="order__carts-nubmer">
            <p className="text text_type_main-medium">#{order.number}</p>
          </div>
          <div className="order__carts-date">
            <p className="text text_type_main-default text_color_inactive">
              {orderCreatedTime}
            </p>
          </div>
        </div>
        <div className={styles["order__carts-name"]}>
          <p className="text text_type_main-medium">{order.name}</p>
          {status === "created" && (
            <p className={`text text_type_main-default`}>Создан</p>
          )}
          {status === "pending" && (
            <p className={` text text_type_main-default`}>Готовится</p>
          )}
          {status === "done" && (
            <p
              className={`${styles["order__compleate-execute-text-compleate"]} text text_type_main-default`}
            >
              Выполнен
            </p>
          )}
        </div>
        <div className={styles["order__carts-content"]}>
          <ul className={styles.ingredientsContainer}>
            {imgs.map((img, key) => (
              <li className={styles.item} key={key}>
                <img className={styles.image} src={img} alt="ingredient" />
              </li>
            ))}
            {tooltipOverflow > 0 && (
              <div
                className={`${styles.moreIngredients} text text_type_digits-default`}
              >
                <span>+{tooltipOverflow}</span>
              </div>
            )}
          </ul>
          <div className={styles["order__carts-content-price"]}>
            <p className="text text_type_main-medium">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFeedCart;
