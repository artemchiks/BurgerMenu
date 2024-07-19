import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import image from "../../images/done.svg";
import Modal from "./Modal";
const OrderDetails = ({ active, setActive }) => {
  return (
    <div>
      <Modal active={active} setActive={setActive}>
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
      </Modal>
    </div>
  );
};

export default OrderDetails;
