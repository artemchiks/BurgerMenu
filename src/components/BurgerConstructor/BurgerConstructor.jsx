import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerconstructor.module.css";
import { useMemo, useState } from "react";
import OrderDetalisBox from "../DialogModal/OrderDetalisBox";
import { useDispatch, useSelector } from "react-redux";
import styless from "./stub.module.css";
import {
  addIngridient,
  addTodo,
  BURGER_CONSTRUCTOR_SLICE,
  resetConstructor,
  setBun,
} from "../../service/burgerConstructor";
import { useDrop } from "react-dnd";
import IngredientCard from "./IngredientCard";
import Stub from "./Stub/Stub";
import { setArrayInrgidients } from "../../service/orderDetalis";
import { createOrderApi } from "../../service/actions/burgerConsctructorActions";
const BurgerConstructor = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state[BURGER_CONSTRUCTOR_SLICE]);

  const price = useMemo(() => {
    const bunPrice = data.bun ? data.bun.price * 2 : 0;
    return (
      data.ingridients.reduce((acc, item) => acc + item.price, 0) + bunPrice
    );
  }, [data]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "burger",
    drop(item) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        dispatch(addTodo(item));
      }
    },
  });

  const handleClick = (e) => {
    dispatch(createOrderApi())
      .then((data) => {
        if (!data) {
          return;
        }
        dispatch(setArrayInrgidients(data.order.number));
        setModalActive(true);
        dispatch(resetConstructor());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={styles["burger__constructor"]} ref={dropRef}>
      <div>
        {!data.bun ? (
          <div className={styless["card__container-top"]}>
            <Stub text={"Выбирите булку"} />
          </div>
        ) : (
          <ConstructorElement
            type="top"
            extraClass={styles["color__div-item"]}
            isLocked={true}
            text={`${data.bun.name} (верх)`}
            price={data.bun.price}
            thumbnail={data.bun.image_mobile}
          />
        )}
        {data.ingridients && data.ingridients.length > 0 ? (
          <div className={styles["constructor__content"]}>
            {data.ingridients.map((item, index) => (
              <IngredientCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className={styless["card__container-center"]}>
            <Stub text={"Выбирите начинку"} />
          </div>
        )}
        {!data.bun ? (
          <div className={styless["card__container-buttom"]}>
            <Stub text={"Выбирите булку"} />
          </div>
        ) : (
          <ConstructorElement
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
          onClick={() => {
            handleClick();
          }}
        >
          Оформить заказ
        </Button>
      </div>
      <OrderDetalisBox active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default BurgerConstructor;
