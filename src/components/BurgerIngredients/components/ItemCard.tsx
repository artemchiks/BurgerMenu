import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useMemo } from "react";
import styles from "./IngredietnsList.module.css";
import { BURGER_CONSTRUCTOR_SLICE } from "../../../service/burgerConstructor";
import { Ingredient, RootState } from "../../../types/type";
import { useAppSelector } from "../../../hooks/hooksDispath";

interface ItemCardProps {
  item?: Ingredient;
}
export const ItemCard = ({ item }: ItemCardProps) => {
  const list = useAppSelector((state) => state[BURGER_CONSTRUCTOR_SLICE]);

  const count = useMemo(() => {
    if (!item) {
      return null;
    }
    if (item.type === "bun") {
      return item._id === list.bun?._id ? 2 : 0;
    }
    return list.ingridients.reduce((acc, ingridient) => {
      if (item._id === ingridient._id) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, []);
  return (
    <div key={item?._id} className={styles["item__card"]}>
      <img src={item?.image} alt={item?.name} />
      {!count ? (
        count === 0
      ) : (
        <Counter count={count} size="default" extraClass="m-1" />
      )}
      <div className={styles["item__card-text"]}>
        {" "}
        {item?.price}
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-small">{item?.name}</p>
    </div>
  );
};
