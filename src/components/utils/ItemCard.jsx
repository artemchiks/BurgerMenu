import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import DialogIngridients from "../DialogModal/DialogIngridients";

export const ItemCard = ({ item, handleSelectItem }) => {
  const count = 1;
  return (
    <div
      key={item._id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <img src={item.image} alt={item.name} />
      {count && <Counter count={count} size="default" extraClass="m-1" />}
      <p style={{ display: "flex", justifyContent: "center", gap: 5 }}>
        {" "}
        {item.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className="text text_type_main-small">{item.name}</p>
    </div>
  );
};
