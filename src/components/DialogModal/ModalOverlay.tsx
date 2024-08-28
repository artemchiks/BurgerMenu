import React, { FC, useEffect } from "react";
import styles from "./dialogmodal.module.css";

interface Overlay{
  onClose:()=>void,
 
}
const ModalOverlay: FC<Overlay> = ({ onClose }) => {
  useEffect(() => {
    const handelKeyDown = (e:KeyboardEvent) => {
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
