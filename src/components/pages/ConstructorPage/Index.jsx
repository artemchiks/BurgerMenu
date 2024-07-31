import React, { useState } from "react";
import BurgerConstructor from "../../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../BurgerIngredients/BurgerIngredients";
import classNames from "classnames";
import styles from "./constructorPage.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngridient,
  BURGER_CONSTRUCTOR_SLICE,
  setBun,
} from "../../../service/burgerConstructor";

const ConstructorPage = ({ list }) => {
  const [current, setCurrent] = useState("one");
  const dispither = useDispatch();
  const data = useSelector((state) => state[BURGER_CONSTRUCTOR_SLICE]);
  const onDropHandler = () => {
    dispither(addIngridient(data));
  };
  const onBunHandler = () => {
    dispither(setBun(data));
  };
  return (
    <section
      className={classNames(styles["content__burger"], "pl-5 pr-5 pb-5 pt-5")}
    >
      <BurgerIngredients setCurrent={setCurrent} />
      <BurgerConstructor
        onDropHandler={onDropHandler}
        onBunHandler={onBunHandler}
      />
    </section>
  );
};

export default ConstructorPage;
