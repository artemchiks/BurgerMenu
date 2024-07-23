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
import Modal from "../DialogModal/Modal";
import OrderDetails from "../DialogModal/OrderDetails";
const BurgerConstructor = ({ list }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className={styles["burger__constructor"]}>
      <div>
        {list.slice(0, 1)?.map((item) => (
          <ConstructorElement
            key={item._id}
            type="top"
            extraClass={styles["color__div-item"]}
            isLocked={true}
            text={`${item.name} (верх)`}
            price={200}
            thumbnail={item.image_mobile}
          />
        ))}
        <div className={styles["constructor__content"]}>
          {list.slice(1, 9)?.map((item) => (
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
        {list.slice(0, 1)?.map((item) => (
          <ConstructorElement
            key={item._id}
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
      {modalActive && (
        <Modal onClose={() => setModalActive(false)}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};
BurgerConstructor.propTypes = {
  list: PropTypes.arrayOf(IngredientType).isRequired,
};
export default BurgerConstructor;
