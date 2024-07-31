import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerconstructor.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { IngredientType } from "../../utils/types";
import OrderDetalisBox from "../DialogModal/OrderDetalisBox";
import { useDispatch, useSelector } from "react-redux";
import { BURGER_CONSTRUCTOR_SLICE } from "../../service/burgerConstructor";
import { useDrop } from "react-dnd";
const BurgerConstructor = ({ list }) => {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state[BURGER_CONSTRUCTOR_SLICE]);
  const bunPrice = data.bun ? data.bun.price * 2 : 0;
  const price =
    data.ingridients.reduce((acc, item) => {
      return acc + item.price;
    }, 0) + bunPrice;
  // const [{ isDrag }, dropRef] = useDrop({
  //   accept: "burger",
  //   item: list,
  //   collect: (monitor) => ({
  //     isDrag: monitor.isDragging(),
  //   }),
  // });

  return (
    <div className={styles["burger__constructor"]}>
      <div>
        {data.bun && (
          <ConstructorElement
            key={data.bun._id}
            type="top"
            extraClass={styles["color__div-item"]}
            isLocked={true}
            text={`${data.bun.name} (верх)`}
            price={data.bun.price}
            thumbnail={data.bun.image_mobile}
          />
        )}
        <div className={styles["constructor__content"]}>
          {data.ingridients.map((item) => (
            <div key={item._id} className={styles["constructor__menu-burger"]}>
              <div className={styles["constructor__drag-menu"]}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                extraClass={styles["color__div-item"]}
                thumbnail={item.image_mobile}
                price={item.price}
                text={item.name}
              />
            </div>
          ))}
        </div>
        {data.bun && (
          <ConstructorElement
            key={data.bun._id}
            type="bottom"
            extraClass={styles["color__div-item"]}
            isLocked={true}
            text={`${data.bun.name} (низ)`}
            price={data.bun.price}
            thumbnail={data.bun.image_mobile}
          />
        )}
      </div>
      <div className={styles["constructor__btn"]}>
        <div className={styles["constructor__btn-price"]}>
          <p className="text text_type_digits-medium">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => setModalActive(true)}
        >
          Оформить заказ
        </Button>
      </div>
      <OrderDetalisBox active={modalActive} setActive={setModalActive} />
    </div>
  );
};
BurgerConstructor.propTypes = {
  list: PropTypes.arrayOf(IngredientType).isRequired,
};
export default BurgerConstructor;
