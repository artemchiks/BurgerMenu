import React from "react";
import BurgerConstructor from "../../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../../BurgerIngredients/BurgerIngredients";
import classNames from "classnames";
import styles from "./constructorPage.module.css";
const ConstructorPage = ({ list }) => {
  return (
    <section
      className={classNames(styles["content__burger"], "pl-5 pr-5 pb-5 pt-5")}
    >
      <BurgerIngredients list={list} />
      <BurgerConstructor list={list} />
    </section>
  );
};

export default ConstructorPage;
