import React, { useState } from "react";
import styles from "./IngredietnsList.module.css";
import { Category } from "./Category";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import Modal from "../../DialogModal/Modal";
import IngredientDetails from "../../DialogModal/IngredientDetails";
const IngredietnsList = ({ list }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  function itemList(items) {
    return list.filter((item) => item.type === items);
  }

  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className={styles["ingridie"]}>
      <Category
        title="Булки"
        items={bunList}
        handleSelectItem={handleSelectItem}
      />
      <Category
        title="Соусы"
        items={sauceList}
        handleSelectItem={handleSelectItem}
      />
      <Category
        title="Начинки"
        items={mainList}
        handleSelectItem={handleSelectItem}
      />

      {selectedItem && (
        <Modal
          onClose={() => setSelectedItem(null)}
          title={"Детали ингридиента"}
        >
          <IngredientDetails item={selectedItem} />
        </Modal>
      )}
    </div>
  );
};
IngredietnsList.propTypes = {
  list: PropTypes.arrayOf(IngredientType).isRequired,
};
export default IngredietnsList;
