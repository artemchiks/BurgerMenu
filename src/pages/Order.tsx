import React from "react";
import DialogFeed from "../components/DialogModal/DialogFeed";
import styles from "./singleСlass.module.css";
const Order = () => {
  return (
    <div className={styles["page__dialog-feed"]}>
      <DialogFeed />
    </div>
  );
};

export default Order;
