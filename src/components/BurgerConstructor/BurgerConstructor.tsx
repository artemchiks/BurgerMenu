import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerconstructor.module.css";
import { useMemo, useState } from "react";
import styless from "./stub.module.css";
import {
  addIngredient,
  BURGER_CONSTRUCTOR_SLICE,
  setBun,
} from "../../service/burgerConstructor";
import { useDrop } from "react-dnd";
import IngredientCard from "./IngredientCard";
import Stub from "./Stub/Stub";
import { createOrderApi } from "../../service/actions/burgerConsctructorActions";
import { USER_SLICE } from "../../service/userSlice";
import { useNavigate } from "react-router-dom";
import ModalLoader from "../DialogModal/ModalLoader";
import { clearIngridient } from "../../service/ingridientDetalis";
import Modal from "../DialogModal/Modal";
import OrderDetails from "../DialogModal/OrderDetails";
import { Ingredient, RootState } from "../../types/type";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksDispath";
const BurgerConstructor = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state[BURGER_CONSTRUCTOR_SLICE]);

  const user = useAppSelector((state) => state[USER_SLICE]);
  const [loading, setLoading] = useState(false);
  const price = useMemo(() => {
    const bunPrice = data.bun?.price ? data.bun.price * 2 : 0;
    return (
      data.ingridients.reduce((acc, item) => acc + (item.price ?? 0), 0) +
      bunPrice
    );
  }, [data]);

  const [, dropRef] = useDrop({
    accept: "burger",
    drop(item: Ingredient) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        dispatch(addIngredient(item));
      }
    },
  });
  const handleModalClose = () => {
    dispatch(clearIngridient());
    setModalActive(false);
  };
  const handleClick = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setLoading(true);
    const success = await dispatch(createOrderApi() as any);

    if (success) {
      setTimeout(() => {
        setLoading(false);
        setModalActive(true);
      });
    } else {
      setLoading(false);
    }
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
            price={data.bun.price ?? 0}
            thumbnail={data.bun.image_mobile ?? ""}
          />
        )}
        {data.ingridients && data.ingridients.length > 0 ? (
          <div className={styles["constructor__content"]}>
            {data.ingridients.map((item, index) => (
              <IngredientCard key={item._id} item={item} index={index} />
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
            price={data.bun.price ?? 0}
            thumbnail={data.bun.image_mobile ?? ""}
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

      {loading && (
        <Modal onClose={handleModalClose} title={"Загрузка заказа"}>
          <ModalLoader loading={loading} />
        </Modal>
      )}
      {modalActive && (
        <Modal onClose={handleModalClose}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
