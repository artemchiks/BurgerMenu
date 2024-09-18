import { useDrag } from "react-dnd";

import { Link, useLocation } from "react-router-dom";
import styles from "./orderFeedConstructor.module.css";
import { FC, ReactNode } from "react";

interface Draggable {
  items: { number: number };
  children: ReactNode;
}

const DraggableOrdes = ({ items, children }: Draggable) => {
  const location = useLocation();

  const [{ isDragging }, dragRef] = useDrag({
    type: "product",
    item: { ...items },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Link
      to={`/feed/${items.number}`}
      state={{ background: location }}
      ref={dragRef}
      className={styles["container__drag-item"]}
    >
      {children}
    </Link>
  );
};

export default DraggableOrdes;
