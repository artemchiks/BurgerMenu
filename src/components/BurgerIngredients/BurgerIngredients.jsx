import { IngredientType } from "../../utils/types";
import TabPanel from "./TabPanel";
import styles from "./buegerIngridients.module.css";
import IngredietnsList from "./components/IngredietnsList";
import PropTypes from "prop-types";
const BurgerIngredients = ({ list }) => {
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
BurgerIngredients.propTypes = {
  list: PropTypes.arrayOf(IngredientType).isRequired,
};
export default BurgerIngredients;
