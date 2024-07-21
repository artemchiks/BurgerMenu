import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
const Modal = ({ active, title, setActive, children }) => {
  return (
    <ModalOverlay active={active} setActive={setActive}>
      <div
        className={styles["modal__content"]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
            {title}
          </p>
          <div className={styles["btn__close"]}>
            <CloseIcon type="primary" onClick={() => setActive(false)} />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>
  );
};

export default Modal;
