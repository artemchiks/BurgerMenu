import React from "react";
import DialogModal from "./DialogModal";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./dialogmodal.module.css";
import classNames from "classnames";
const DialogIngridients = ({ active, setActive, item }) => {
  return (
    <div>
      <DialogModal active={active}>
        <div
          className={classNames(
            styles["detail__ingridients"],
            "pl-3 pr-3 pb-3 pt-3"
          )}
        >
          <p
            className={classNames(
              styles["detail__ingridients-text"],
              "text text_type_main-medium"
            )}
          >
            Детали ингридиента
          </p>
          <CloseIcon type="primary" onClick={() => setActive(false)} />
        </div>
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
      </DialogModal>
    </div>
  );
};

export default DialogIngridients;
