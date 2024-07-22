import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./appHeader.module.css";
import classNames from "classnames";
const AppHeader = () => {
  return (
    <header className={styles["conteiner__header"]}>
      <nav>
        <ul className={styles["app-header__menu-list"]}>
          <div
            className={classNames(
              styles["app-header__btn-container"],
              "text text_type_main-default"
            )}
          >
            <div
              className={classNames(
                styles["app-header__btn-container__btn"],
                "pl-5 pr-5 pb-5 pt-5"
              )}
            >
              <BurgerIcon type="primary" />{" "}
              <span className="ml-2">Констурктор</span>
            </div>
            <div
              className={classNames(
                styles["app-header__btn-container__btn"],
                "pl-5 pr-5 pb-5 pt-5"
              )}
            >
              <ListIcon type="secondary" />{" "}
              <span className="ml-2 text_color_inactive">Лента заказов</span>
            </div>
          </div>
          <div className={styles["app-header__logo"]}>
            <Logo />
          </div>
          <div className={styles["app-header__btn-container"]}>
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
