import classNames from "classnames";
import styles from "../singleСlass.module.css";
import { FC, ReactNode } from "react";

interface ConstrucoirAvtorixationForm{
  text:string,
  children:ReactNode,
}

const ConstrucoirAvtorixationForm= ({ text, children }:ConstrucoirAvtorixationForm) => {
  return (
    <div>
      <div className={styles["entrance-block__content"]}>
        <p
          className={classNames(
            styles["entrance-block__content-text"],
            "text text_type_main-medium"
          )}
        >
          {text}
        </p>
        {children}
      </div>
    </div>
  );
};

export default ConstrucoirAvtorixationForm;
