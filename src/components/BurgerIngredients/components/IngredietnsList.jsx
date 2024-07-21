import React, { useState } from "react";
import styles from "./IngredietnsList.module.css";
import { Category } from "./Category";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import IngridientsDialogBox from "../../DialogModal/IngridientsDialogBox";
const IngredietnsList = ({ list }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(false);
  function itemList(items) {
    return list.filter((item) => item.type === items);
  }

  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setActive(true);
  };
  return (
    <div className={styles["ingridie"]}>
      <Category title="Булки" items={bunList} />
      <Category title="Соусы" items={sauceList} />
      <Category
        title="Начинки"
        items={mainList}
        handleSelectItem={handleSelectItem}
      />

      <IngridientsDialogBox
        active={active}
        setActive={setActive}
        handleSelectItem={handleSelectItem}
        item={selectedItem}
      />
    </div>
  );
};
IngredietnsList.propTypes = {
  list: PropTypes.arrayOf(IngredientType).isRequired,
};
export default IngredietnsList;
