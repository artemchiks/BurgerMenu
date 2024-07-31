import { useDispatch, useSelector } from "react-redux";
import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { INGRIDIENT_DETALIS_SLICE } from "../../service/ingridientDetalis";
const IngredientDetails = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state[INGRIDIENT_DETALIS_SLICE]);
  if (!item) {
    return null;
  }
  return (
    <div>
      <div className={styles["detail__ingridients-callories"]}>
        <img
          className={styles["detail__ingridients-callories-img"]}
          src={item?.image}
          alt={item?.name}
        />
        <p className="text text_type_main-medium">{item?.name}</p>
        <div
          className={classNames(
            [],
            "text text_type_main-default text_color_inactive"
          )}
        >
          <ul className={styles["detail__ingridients-callories-ul"]}>
            <li>
              <p>Калории,ккал</p>
              <p className={styles["detail__ingridients-callories-text"]}>
                {item?.calories}
              </p>
            </li>
            <li>
              <p>Белки, г</p>
              <p className={styles["detail__ingridients-callories-text"]}>
                {item?.proteins}
              </p>
            </li>
            <li>
              <p>Жиры, г</p>
              <p className={styles["detail__ingridients-callories-text"]}>
                {item?.fat}
              </p>
            </li>
            <li>
              <p>Углеводы, г</p>
              <p className={styles["detail__ingridients-callories-text"]}>
                {item?.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
