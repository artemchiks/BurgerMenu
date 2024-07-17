import classNames from "classnames";
import { ItemCard } from "./ItemCard";
import styles from "./data.module.css";

export const Category = ({ title, items }) => {
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
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
};
