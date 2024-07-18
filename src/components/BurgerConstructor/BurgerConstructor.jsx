import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burgerconstructor.module.css";
import DialogModal from "../DialogModal/DialogModal";
import { useState } from "react";
import DialogReadinessOrders from "../DialogModal/DialogReadinessOrders";

const BurgerConstructor = ({ list }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingTop: 40,
      }}
    >
      <div>
        {list.slice(0, 1)?.map((item) => (
          <ConstructorElement
            type="top"
            extraClass={styles["color__div-item"]}
            isLocked={true}
            text={`${item.name} (верх)`}
            price={200}
            thumbnail={item.image_mobile}
          />
        ))}
        <div className={styles["constructor__content"]}>
          {list.slice(1, 7)?.map((item) => (
            <div className={styles["constructor__menu-burger"]}>
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
        {list.slice(0, 1)?.map((item) => (
          <ConstructorElement
            extraClass={styles["color__div-item"]}
            type="bottom"
            isLocked={true}
            text={`${item.name} (низ)`}
            price={200}
            thumbnail={item.image_mobile}
          />
        ))}
      </div>
      <div className={styles["constructor__btn"]}>
        <div className={styles["constructor__btn-price"]}>
          <p className="text text_type_digits-medium">685</p>
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
      <DialogReadinessOrders active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default BurgerConstructor;
