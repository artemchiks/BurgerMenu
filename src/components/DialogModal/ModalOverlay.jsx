import React, { useEffect } from "react";
import styles from "./dialogmodal.module.css";
const ModalOverlay = ({ onClose }) => {
  useEffect(() => {
    const handelKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handelKeyDown);
    return () => {
      document.removeEventListener("keydown", handelKeyDown);
    };
  }, []);

  return (
    <div
      className={`${styles.modal__overlay} ${styles.active}`}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    ></div>
  );
};

export default ModalOverlay;
