import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./IngredietnsList.module.css";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
export const ItemCard = ({ item, handleSelectItem }) => {
  const [count, setCount] = useState(0);
  const handelCount = () => {
    setCount(count + 1);
  };
  return (
    <div key={item._id} className={styles["item__card"]} onClick={handelCount}>
      <img src={item.image} alt={item.name} />
      {!count ? (
        count === 0
      ) : (
        <Counter count={count} size="default" extraClass="m-1" />
      )}
      <p className={styles["item__card-text"]}>
        {" "}
        {item.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className="text text_type_main-small">{item.name}</p>
    </div>
  );
};

ItemCard.propTypes = {
  IngredientType,
};
