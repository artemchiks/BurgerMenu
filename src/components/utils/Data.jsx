import React, { useState } from "react";
import styles from "./data.module.css";
import { Category } from "./Category";
import IngredientDetails from "../DialogModal/IngredientDetails";

const Data = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(false);
  function itemList(items) {
    return data.filter((item) => item.type === items);
  }

  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");

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

        <IngredientDetails
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
