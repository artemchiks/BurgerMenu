import { useSelector } from "react-redux";
import { IngredientType } from "../../utils/types";
import TabPanel from "./TabPanel";
import styles from "./buegerIngridients.module.css";
import IngredietnsList from "./components/IngredietnsList";
import { DndProvider } from "react-dnd";

const BurgerIngredients = () => {
  const list = useSelector((state) => state.ingridientList);

  return (
    <div>
      <p className="text text_type_main-large">Соберите бургер</p>
      <TabPanel />
      <div className={styles["burger__ingriditnts"]}>
        <IngredietnsList list={list} />
      </div>
    </div>
  );
};

export default BurgerIngredients;
