import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerconstructor.module.css";
import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { IngredientType } from "../../utils/types";
import OrderDetalisBox from "../DialogModal/OrderDetalisBox";
import { useDispatch, useSelector } from "react-redux";
import styless from "./stub.module.css";
import {
  addIngridient,
  BURGER_CONSTRUCTOR_SLICE,
  clearIngridients,
  removeIngridient,
  setBun,
} from "../../service/burgerConstructor";
import { useDrop } from "react-dnd";
import IngredientCard from "./IngredientCard";
import Stub from "./Stub/Stub";
import { setIngridients } from "../../service/ingridientListSlice";
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
        dispatch(addIngridient(item));
      }
    },
  });
  const handleDeleteIngredient = (id) => {
    dispatch(removeIngridient(id));
  };
  const url = "https://norma.nomoreparties.space/api/orders";

  async function createOrderApi() {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          ingredients: ["609646e4dc916e00276b286e", "609646e4dc916e00276b2870"],
        }),
      });
      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = () => {
    createOrderApi()
      .then((data) => {
        dispatch(data);
        setModalActive(true);
      })
      .catch((err) => {
        console.log(err);
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
        <div className={styles["constructor__content"]}>
          {data.ingridients.map((item, index) => (
            <IngredientCard
              key={`${item._id}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
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
            setModalActive(true);
            createOrderApi();
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
