import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./burgerconstructor.module.css";
import {
  moveIngridient,
  removeIngridient,
} from "../../service/burgerConstructor";
import { Ingredient } from "../../types/type";
import { useAppDispatch } from "../../hooks/hooksDispath";

interface Ingridient {
  index: number;
  item: Ingredient;
}

const IngredientCard = ({ item, index }: Ingridient) => {
  const dispatch = useAppDispatch();

  const [, ref] = useDrag({
    type: "ingredient",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "ingredient",
    hover(hoveredItem: Ingridient) {
      if (hoveredItem.index !== index) {
        dispatch(
          moveIngridient({ fromIndex: hoveredItem.index, toIndex: index })
        );
        hoveredItem.index = index;
      }
    },
  });
  return (
    <div
      ref={(node) => ref(drop(node))}
      className={styles["constructor__menu-burger"]}
    >
      <div className={styles["constructor__drag-menu"]}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={item.name ?? ""}
        price={item.price}
        thumbnail={item.image_mobile ?? ""}
        extraClass={styles["color__div-item"]}
        handleClose={() => dispatch(removeIngridient(item._id))}
      />
    </div>
  );
};

export default IngredientCard;
