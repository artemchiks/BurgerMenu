import { useDrag } from "react-dnd";
import { IngredientType } from "../../utils/types";

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
DraggableItem.propTypes = {
  IngredientType,
};
export default DraggableItem;
