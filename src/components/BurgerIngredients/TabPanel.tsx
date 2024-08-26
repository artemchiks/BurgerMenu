import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./buegerIngridients.module.css";
import { FC } from "react";

interface  Tabs{
  current:string
  setCurrent: (tab: string) => void;
}

const TabPanel:FC<Tabs> = ({ current, setCurrent }) => {
  return (
    <div className={styles["tabs__content"]}>
      <Tab
        value="one"
        active={current === "one"}
        onClick={() => setCurrent("one")}
      >
        Булки
      </Tab>
      <Tab
        value="two"
        active={current === "two"}
        onClick={() => setCurrent("two")}
      >
        Соусы
      </Tab>
      <Tab
        value="three"
        active={current === "three"}
        onClick={() => setCurrent("three")}
      >
        Начинки
      </Tab>
    </div>
  );
};

export default TabPanel;
