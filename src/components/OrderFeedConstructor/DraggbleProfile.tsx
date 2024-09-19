import { useDrag } from "react-dnd";

import { Link, useLocation } from "react-router-dom";
import styles from "./orderFeedConstructor.module.css";
import { FC, ReactNode } from "react";

interface Draggable {
  items: { number: number };
  children: ReactNode;
}

const DraggbleProfile = ({ items, children }: Draggable) => {
  const location = useLocation();

  return (
    <Link
      to={`/profile/orders/${items.number}`}
      state={{ background: location }}
      className={styles["container__drag-item"]}
    >
      {children}
    </Link>
  );
};

export default DraggbleProfile;
