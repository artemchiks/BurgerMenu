import React, { useState } from "react";
import styles from "./data.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burger } from "./../data.js";
import { Category } from "./Category";
import DialogIngridients from "../DialogModal/DialogIngridients";

const Data = ({ image }) => {
  function itemList(items) {
    return burger.filter((item) => item.type === items);
  }
  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(false);
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setActive(true);
  };
  return (
    <>
      <div className={styles["ingridie"]}>
        <Category title="Булки" items={bunList} />
        <Category title="Соусы" items={sauceList} />
        <Category
          title="Начинки"
          items={mainList}
          handleSelectItem={handleSelectItem}
        />

        <DialogIngridients
          active={active}
          setActive={setActive}
          handleSelectItem={handleSelectItem}
          item={selectedItem}
        />
      </div>
    </>
  );
};

export default Data;
