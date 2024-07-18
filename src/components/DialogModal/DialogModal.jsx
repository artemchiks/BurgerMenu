import React from "react";
import styles from "./dialogmodal.module.css";
const DialogModal = ({ active, setActive, children }) => {
  return (
    <div className={`${styles.modal} ${active ? styles.active : ""}`}>
      <div className={styles["modal__content"]}>{children}</div>
    </div>
  );
};

export default DialogModal;
