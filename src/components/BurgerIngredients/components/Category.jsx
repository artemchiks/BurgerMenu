import classNames from "classnames";
import { ItemCard } from "./ItemCard";
import styles from "./IngredietnsList.module.css";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import {
  addIngridient,
  BURGER_CONSTRUCTOR_SLICE,
} from "../../../service/burgerConstructor";
import {
  INGRIDIENT_DETALIS_SLICE,
  setIngridient,
} from "../../../service/ingridientDetalis";
import {
  INGRIDIENT_LIST_SLICE,
  setIngridients,
} from "../../../service/ingridientListSlice";
export const Category = ({ title, items, handleSelectItem }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state[INGRIDIENT_LIST_SLICE]);

  return (
    <div>
      <p
        className={classNames(
          styles["text__categori"],
          "text text_type_main-medium"
        )}
      >
        {title}
      </p>
      <div className={styles.itemsList}>
        {items?.map((item) => {
          // Оборачиваем в отдельный компонент для корректного использования хуков
          const DraggableItem = () => {
            const [{ isDragging }, dragRef] = useDrag({
              type: "burger",
              item: { ...item },
              collect: (monitor) => ({
                isDragging: monitor.isDragging(),
              }),
            });

            return (
              <div
                ref={dragRef}
                key={item._id}
                onClick={() => {
                  if (handleSelectItem) {
                    handleSelectItem(item);
                    dispatch(setIngridients(item));
                  }
                }}
                style={{ opacity: isDragging ? 0.5 : 1 }}
              >
                <ItemCard item={item} />
              </div>
            );
          };

          return <DraggableItem key={item._id} />;
        })}
      </div>
    </div>
  );
};

Category.propTypes = {
  IngredientType,
};
