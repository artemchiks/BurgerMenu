import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./appHeader.module.css";
const AppHeader = () => {
  return (
    <header className={styles["conteiner__header"]}>
      <nav>
        <ul className={styles["app-header__menu-list"]}>
          <div className={styles["app-header__btn"]}>
            <BurgerIcon type="primary" /> Констурктор
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </div>
          <Logo />
          <div className={styles["app-header__btn"]}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Личный кабинет
            </p>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
