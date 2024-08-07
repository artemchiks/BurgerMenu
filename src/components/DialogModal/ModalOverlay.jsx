import React, { useEffect } from "react";
import styles from "./dialogmodal.module.css";
const ModalOverlay = ({ active, onClose }) => {
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
  }, [onClose]);
  return (
    <div
      className={`${styles.modal__overlay} ${active ? styles.active : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    ></div>
  );
};

export default ModalOverlay;
