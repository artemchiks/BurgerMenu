import React from "react";
import styles from "./data.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burger } from "./../data.js";
import { Category } from "./Category";

const Data = ({ image }) => {
  function itemList(items) {
    return burger.filter((item) => item.type === items);
  }
  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");

  return (
    <>
      <div className={styles["ingridie"]}>
        <Category title="Булки" items={bunList} />
        <Category title="Соусы" items={sauceList} />
        <Category title="Начинки" items={mainList} />
      </div>
    </>
  );
};

export default Data;
