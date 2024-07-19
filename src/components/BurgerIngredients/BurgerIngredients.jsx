import React from "react";
import TabPanel from "./TabPanel";
import styles from "./buegerIngridients.module.css";
import Data from "../utils/Data";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { burger } from "../data";
import classNames from "classnames";
const BurgerIngredients = ({ data }) => {
  return (
    <section
      className={classNames(styles["content__burger"], "pl-5 pr-5 pb-5 pt-5")}
    >
      <div>
        <p className="text text_type_main-large">Соберите бургер</p>
        <TabPanel />
        <div className={styles["burger__ingriditnts"]}>
          <Data data={data} />
        </div>
      </div>
      <div>
        <BurgerConstructor list={burger} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
