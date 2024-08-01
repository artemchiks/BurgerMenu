import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ items, children }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "burger",
    item: { ...items },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return <div ref={dragRef}>{children}</div>;
};

export default DraggableItem;
