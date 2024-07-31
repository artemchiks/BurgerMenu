import React, { useRef, useState } from "react";
import styles from "./IngredietnsList.module.css";
import { Category } from "./Category";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import IngridientsDialogBox from "../../DialogModal/IngridientsDialogBox";
import { useDispatch, useSelector } from "react-redux";
import { setIngridient } from "../../../service/ingridientDetalis";
import { useDrag } from "react-dnd";
const IngredietnsList = ({ setCurrent }) => {
  const list = useSelector((state) => state.ingridientList);
  const [active, setActive] = useState(false);
  function itemList(items) {
    return list.filter((item) => item.type === items);
  }
  const handleScroll = () => {
    console.log(1);
  };
  const ref = useRef();
  const dispatch = useDispatch();
  const bunList = itemList("bun");
  const sauceList = itemList("sauce");
  const mainList = itemList("main");

  const handleSelectItem = (item) => {
    dispatch(setIngridient(item));
    setActive(true);
  };

  return (
    <div className={styles["ingridie"]} onScroll={handleScroll}>
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

      <IngridientsDialogBox active={active} setActive={setActive} />
    </div>
  );
};

export default IngredietnsList;
