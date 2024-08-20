import { useSelector } from "react-redux";
import styles from "./dialogmodal.module.css";
import classNames from "classnames";
import { INGRIDIENT_DETALIS_SLICE } from "../../service/ingridientDetalis";
import { useParams } from "react-router-dom";
import { INGRIDIENT_LIST_SLICE } from "../../service/ingridientListSlice";
const IngredientDetails = () => {
  const item = useSelector((state) => state[INGRIDIENT_LIST_SLICE]);
  const { id } = useParams();
  const info = item.find((ingredient) => ingredient._id === id);
  console.log(info);
  return (
    <div>
      {info && (
        <div className={styles["detail__ingridients-callories"]}>
          <img
            className={styles["detail__ingridients-callories-img"]}
            src={info?.image}
            alt={info?.name}
          />
          <p className="text text_type_main-medium">{info?.name}</p>
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
                  {info?.calories}
                </p>
              </li>
              <li>
                <p>Белки, г</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {info?.proteins}
                </p>
              </li>
              <li>
                <p>Жиры, г</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {info?.fat}
                </p>
              </li>
              <li>
                <p>Углеводы, г</p>
                <p className={styles["detail__ingridients-callories-text"]}>
                  {info?.carbohydrates}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientDetails;
