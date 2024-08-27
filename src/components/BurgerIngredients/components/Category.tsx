import classNames from "classnames";
import { ItemCard } from "./ItemCard";
import styles from "./IngredietnsList.module.css";

import PropTypes from "prop-types";
import DraggableItem from "../DraggableItem";
import { FC } from "react";
import { Ingredient } from "../../../types/type";

interface Categorys {
  title: string;
  items: Ingredient[]; 
  handleSelectItem: (item: Ingredient) => void; 
}
export const Category:FC<Categorys> = ({ title, items, handleSelectItem }) => {
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
        {items?.map((item) => (
          <DraggableItem items={item} key={item._id}>
            <div
              key={item._id}
              onClick={() => {
                if (handleSelectItem) {
                  handleSelectItem(item);
                }
              }}
            >
              <ItemCard item={item} />
            </div>
          </DraggableItem>
        ))}
      </div>
    </div>
  );
};
