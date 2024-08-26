import { useDrag } from "react-dnd";

import { Link, useLocation } from "react-router-dom";
import styles from "./buegerIngridients.module.css";
import { FC, ReactNode } from "react";

interface Draggable {
  items: {_id: string };
  children:ReactNode;
}

const DraggableItem:FC<Draggable> = ({ items, children }) => {
  const location = useLocation();

  const [{ isDragging }, dragRef] = useDrag({
    type: "burger",
    item: { ...items },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Link
      to={`/ingredients/${items._id}`}
      state={{ background: location }}
      ref={dragRef}
      className={styles["container__drag-item"]}
    >
      {children}
    </Link>
  );
};

export default DraggableItem;
