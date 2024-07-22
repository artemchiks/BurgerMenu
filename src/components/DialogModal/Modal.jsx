import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");
const Modal = ({ active, title, setActive, children }) => {
  if (!active) {
    return null;
  }
  return createPortal(
    <div className={`${styles.modal} ${active ? styles.active : ""}`}>
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
      <ModalOverlay active={active} setActive={setActive} />
    </div>,
    modalRoot
  );
};

export default Modal;
