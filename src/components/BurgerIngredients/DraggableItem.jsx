import { useDrag } from "react-dnd";
import { IngredientType } from "../../utils/types";
import { Link, useLocation } from "react-router-dom";

const DraggableItem = ({ items, children }) => {
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
    >
      {children}
    </Link>
  );
};
DraggableItem.propTypes = {
  IngredientType,
};
export default DraggableItem;
