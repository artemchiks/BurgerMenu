import React, { useState } from "react";
import DialogModal from "./DialogModal";
import styles from "./dialogmodal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import image from "../../images/done.svg";
const DialogReadinessOrders = ({ active, setActive }) => {
  return (
    <div>
      <DialogModal active={active}>
        <div
          className={classNames(
            styles["modal__btn-exit"],
            "ml-5 mr-5 mb-5 mt-5"
          )}
        >
          <CloseIcon type="primary" onClick={() => setActive(false)} />
        </div>
        <div className={styles["modal__styles"]}>
          <div className={styles["modal__indificator"]}>
            <p
              className={classNames(
                styles["modal__indificator-id"],
                "text text_type_digits-large"
              )}
            >
              034536
            </p>
          </div>
          <p
            className={classNames(
              styles["modal__indificator-text"],
              "text text_type_main-medium"
            )}
          >
            индетификатор заказа
          </p>
          <img
            className={styles["modal__indificator-img"]}
            src={image}
            alt="Execute number"
          />
          <p
            className={classNames(
              styles["modal__indificator"],
              "text text_type_main-small"
            )}
          >
            Ваш заказ начали готовить
          </p>
          <p
            className={classNames(
              styles["modal__indificator"],
              "text text_type_main-default text_color_inactive"
            )}
          >
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </DialogModal>
    </div>
  );
};

export default DialogReadinessOrders;
