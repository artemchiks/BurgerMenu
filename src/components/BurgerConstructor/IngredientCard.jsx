import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import styles from "./burgerconstructor.module.css";
import { setIngridients } from "../../service/ingridientListSlice";
import {
  moveIngridient,
  removeIngridient,
} from "../../service/burgerConstructor";
const IngredientCard = ({ item, index }) => {
  const dispatch = useDispatch();

  const [, ref] = useDrag({
    type: "ingredient",
    item: { index },
  });

  const [{ isOver }, drop] = useDrop({
    accept: "ingredient",
    hover(hoveredItem) {
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
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        extraClass={styles["color__div-item"]}
        handleClose={() => dispatch(removeIngridient(item._id))}
      />
    </div>
  );
};

export default IngredientCard;
