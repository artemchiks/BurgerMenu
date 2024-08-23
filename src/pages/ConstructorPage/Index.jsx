import React, { useState } from "react";

import classNames from "classnames";
import styles from "./constructorPage.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";

const ConstructorPage = () => {
  return (
    <>
      {" "}
      <DndProvider backend={HTML5Backend}>
        <section
          className={classNames(
            styles["content__burger"],
            "pl-5 pr-5 pb-5 pt-5"
          )}
        >
          <BurgerIngredients />
          <BurgerConstructor />
        </section>
      </DndProvider>
    </>
  );
};

export default ConstructorPage;
