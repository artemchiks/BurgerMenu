import React from "react";
import Modal from "./Modal";
import styles from "./dialogmodal.module.css";
import classNames from "classnames";
const IngredientDetails = ({ active, setActive, item }) => {
  return (
    <div>
      <Modal active={active} setActive={setActive} title={"Детали ингридиента"}>
        <div className={styles["detail__ingridients-callories"]}>
          <img
            className={styles["detail__ingridients-callories-img"]}
            src={item?.image}
            alt={item?.name}
          />
          <p className="text text_type_main-medium">{item?.name}</p>
          <div
            className={classNames(
              [],
              "text text_type_main-default text_color_inactive"
            )}
          >
            <ul className={styles["detail__ingridients-callories-ul"]}>
              <li>
                <p>Калории,ккал</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {item?.calories}
                </p>
              </li>
              <li>
                <p>Белки, г</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {item?.proteins}
                </p>
              </li>
              <li>
                <p>Жиры, г</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {item?.fat}
                </p>
              </li>
              <li>
                <p>Углеводы, г</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {item?.carbohydrates}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IngredientDetails;
