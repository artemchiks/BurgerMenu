import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./buegerIngridients.module.css";
import { IngredientType } from "../../utils/types";
const TabPanel = ({ current, setCurrent }) => {
  return (
    <div className={styles["tabs__content"]}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};
TabPanel.propTypes = {
  IngredientType,
};
export default TabPanel;
