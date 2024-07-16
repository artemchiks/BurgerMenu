import React from "react";
import TabPanel from "./TabPanel";
import styles from "./buegerIngridients.module.css";
import Data from "../utils/Data";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
const BurgerIngredients = () => {
  return (
    <section className={styles["content__burger"]}>
      <div>
        <p className="text text_type_main-large">Соберите бургер</p>
        <TabPanel />
        <div className={styles["burger__ingriditnts"]}>
          <Data />
        </div>
      </div>
      <div>
        <BurgerConstructor />
      </div>
    </section>
  );
};

export default BurgerIngredients;
