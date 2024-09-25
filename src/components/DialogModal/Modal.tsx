import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";
import { createPortal } from "react-dom";
import { FC, ReactNode, useCallback } from "react";

const modalRoot = document.querySelector("#modal-root");

interface ModalProps {
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = ({ title, children, onClose }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return createPortal(
    <div className={`${styles.modal}`}>
      <ModalOverlay onClose={handleClose} />
      <div
        className={styles["modal__content"]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={classNames(
            styles["modal__content-ingridients"],
            "pl-3 pr-3 pb-3 pt-3"
          )}
        >
          <p
            className={classNames(
              styles["modal__content__ingridients-text"],
              "text text_type_main-medium"
            )}
          >
            {title}
          </p>
          <div data-testid="close_modal_icon" className={styles["btn__close"]}>
            <CloseIcon type="primary" onClick={handleClose} />
          </div>
        </div>
        {children}
      </div>
    </div>,
    modalRoot as HTMLElement
  );
};

export default Modal;
