import React, { useEffect } from "react";
import styles from "./dialogmodal.module.css";
const ModalOverlay = ({ active, children, setActive }) => {
  useEffect(() => {
    const handelKeyDown = (e) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };
    document.addEventListener("keydown", handelKeyDown);
    return () => {
      document.removeEventListener("keydown", handelKeyDown);
    };
  }, [setActive]);
  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setActive(false);
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
