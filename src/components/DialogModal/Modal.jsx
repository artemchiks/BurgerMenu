import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import { createPortal } from "react-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { clearIngridient } from "../../service/ingridientDetalis";
const modalRoot = document.querySelector("#modal-root");
const Modal = ({ active, title, setActive, children }) => {
  const dispatch = useDispatch();
  const handleClose = useCallback(() => {
    dispatch(clearIngridient());
    setActive(false);
  }, [setActive]);
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
            <CloseIcon type="primary" onClick={handleClose} />
          </div>
        </div>
        {children}
      </div>
      <ModalOverlay active={active} onClose={handleClose} />
    </div>,
    modalRoot
  );
};

export default Modal;
