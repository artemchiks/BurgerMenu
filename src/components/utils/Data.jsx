import React from "react";
import styles from "./data.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burger } from './../data.js';
import { Category } from "./Category";

const Data = ({ image }) => {
  const bunList = burger.filter(item => item.type === 'bun');
  const sauceList = burger.filter(item => item.type === 'sauce');
  const mainList = burger.filter(item => item.type === 'main');

  return (
    <>
      <div className={styles["ingridie"]}>
        <Category title="Bulki" items={bunList} />
        <Category title="Sauce" items={sauceList}/>
        <Category title="Main" items={mainList}/>
      </div>
    </>
  );
};

export default Data;
