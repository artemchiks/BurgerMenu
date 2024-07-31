import classNames from "classnames";
import { ItemCard } from "./ItemCard";
import styles from "./IngredietnsList.module.css";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
export const Category = ({ title, items, handleSelectItem }) => {
  // const dispatch = useDispatch();
  // const item = useSelector((state) => state[INGRIDIENT_DETALIS_SLICE]);
  // console.log(item);
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
        ))}
      </div>
    </div>
  );
};
Category.propTypes = {
  IngredientType,
};
