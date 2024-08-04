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
  BURGER_CONSTRUCTOR_SLICE,
  setBun,
} from "../../service/burgerConstructor";
import { useDrop } from "react-dnd";
import IngredientCard from "./IngredientCard";
import Stub from "./Stub/Stub";
import { setArrayInrgidients } from "../../service/orderDetalis";
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

  const idIngridients = data.ingridients.map((item) => {
    return item._id;
  });

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

  const url = "https://norma.nomoreparties.space/api/orders";

  async function createOrderApi() {
    if (!data.bun?._id) {
      return "";
    }

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients: [data.bun._id, ...idIngridients, data.bun._id],
        }),
      });

      if (!response.ok) {
        throw new Error("Could not fetch");
      }
      const app = await response.json();
      return app;
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = (e) => {
    createOrderApi()
      .then((data) => {
        if (!data) {
          return "";
        }
        dispatch(setArrayInrgidients(data.order.number));
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
        {data.ingridients && data.ingridients.length > 0 ? (
          <div className={styles["constructor__content"]}>
            {data.ingridients.map((item, index) => (
              <IngredientCard
                key={`${item._id}-${index}`}
                item={item}
                index={index}
              />
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
