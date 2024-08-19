import TabPanel from "./TabPanel";
import styles from "./buegerIngridients.module.css";
import IngredietnsList from "./components/IngredietnsList";

import { useState } from "react";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState("one");
  return (
    <div>
      <p className="text text_type_main-large">Соберите бургер</p>
      <TabPanel current={current} setCurrent={setCurrent} />
      <div className={styles["burger__ingriditnts"]}>
        <IngredietnsList setCurrent={setCurrent} />
      </div>
    </div>
  );
};

export default BurgerIngredients;
