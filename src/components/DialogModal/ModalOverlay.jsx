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
  }, [onClose]);
  return (
    <div
      className={`${styles.modal__overlay} `}
      onClick={() => {
        onClose();
      }}
    ></div>
  );
};

export default ModalOverlay;
