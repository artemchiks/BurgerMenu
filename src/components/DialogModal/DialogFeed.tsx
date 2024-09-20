import styles from "./dialogmodal.module.css";
import { useParams } from "react-router-dom";
import { Ingredient, RootState } from "../../types/type";
import { ORDERS_SLICE } from "../../service/profileOrders";
import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";
import { useMemo } from "react";
import { getDateDiff } from "../../utils/datetime";
import moment from "moment";
import { classNames } from "primereact/utils";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../hooks/hooksDispath";

const DialogFeed = () => {
  const { id } = useParams<{ id: string }>();

  const orders = useAppSelector(
    (state) => state[ORDERS_SLICE].orders
  );

  const info = orders.find((order) => order.number.toString() === id);
  const orderCreatedTime = useMemo(() => {
    if (!info) return "";

    const daysDiff = getDateDiff(info.createdAt);
    const time = moment(info.createdAt).format("HH:mm");

    return `${daysDiff}, ${time}`;
  }, [info?.createdAt]);

  const ingridients = useAppSelector(
    (state) => state[INGRIDIENT_LIST_SLICE]
  );
  const ingredientsData: Ingredient[] = useMemo(() => {
    return (
      info?.ingredients.map((ingridientId: string) => {
        const ingridient = ingridients.find((ing) => ing._id === ingridientId);
        return {
          _id: ingridient?._id || "",
          image: ingridient?.image || "",
          name: ingridient?.name || "",
          price: ingridient?.price || 0,
        };
      }) || []
    );
  }, [info, ingridients]);

  const price = useMemo(() => {
    if (!info?.ingredients) return 0;
    return info.ingredients.reduce((acc: number, ingridientId: string) => {
      acc += ingridients.find((ing) => ing._id === ingridientId)?.price || 0;
      return acc;
    }, 0);
  }, [info?.ingredients, ingridients]);

  const ingredientCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    info?.ingredients.forEach((id: string) => {
      counts[id] = (counts[id] || 0) + 1;
    });
    return counts;
  }, [info?.ingredients]);

  const uniqueIngredients = useMemo(() => {
    const unique: Ingredient[] = [];
    const seen = new Set();
    ingredientsData.forEach((ingredient) => {
      if (!seen.has(ingredient._id)) {
        seen.add(ingredient._id);
        unique.push(ingredient);
      }
    });
    return unique;
  }, [ingredientsData]);

  return (
    <div className={styles["content__feed"]}>
      {info && (
        <div>
          <p
            className={classNames(
              styles["content__feed-name"],
              "text text_type_main-medium"
            )}
          >
            {info.name}
          </p>
          <div>
            {info.status === "created" && (
              <p className={`text text_type_main-default`}>Создан</p>
            )}
            {info.status === "pending" && (
              <p className={` text text_type_main-default`}>Готовится</p>
            )}
            {info.status === "done" && (
              <p
                className={`${styles["order__compleate-execute-text-compleate"]} text text_type_main-default`}
              >
                Выполнен
              </p>
            )}
          </div>

          <div className={styles["content__feed-compound"]}>
            <p className="text text_type_main-medium">Состав:</p>
            <div className={styles["content__feed-compound-div"]}>
              {uniqueIngredients?.map((ingredient, key) => (
                <div className={styles.el} key={key}>
                  <div className={styles.el}>
                    <div className={styles.item}>
                      <img
                        className={styles.image}
                        src={ingredient.image}
                        alt="ingredient"
                      />
                    </div>
                    <p
                      className={classNames(
                        styles["content__feed-compound-text"],
                        "text text_type_main-default"
                      )}
                    >
                      {ingredient.name}
                    </p>
                  </div>
                  <div
                    className={classNames(
                      styles["content__feed-compound-ul-price"],
                      "text text_type_digits-default"
                    )}
                  >
                    {ingredientCounts[ingredient._id]} x {ingredient.price}
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["content__feed-compound-price"]}>
            <div>
              <p className="text text_type_main-default text_color_inactive">
                {orderCreatedTime}
              </p>
            </div>
            <div className={styles["content__feed-compound-price"]}>
              <p className="text text_type_main-medium">{price}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogFeed;
