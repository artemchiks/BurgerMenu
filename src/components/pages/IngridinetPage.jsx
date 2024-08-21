import { classNames } from "primereact/utils";
import IngredientDetails from "../DialogModal/IngredientDetails";
import styles from "./singleСlass.module.css";
const IngridinetPage = () => {
  return (
    <div className={styles["page__content__ingridients"]}>
      <p
        className={classNames(
          styles["page__content__ingridients-text"],
          "text text_type_main-medium"
        )}
      >
        Детали ингридиента
      </p>
      <IngredientDetails />
    </div>
  );
};

export default IngridinetPage;
