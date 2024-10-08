import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./appHeader.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { USER_SLICE } from "../../service/userSlice";
import { useAppSelector } from "../../hooks/hooksDispath";

const AppHeader = () => {
  const user = useAppSelector((state) => state[USER_SLICE]);
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
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                {({ isActive }) => (
                  <div className={styles["app-header__btn-container-menu"]}>
                    {isActive ? (
                      <BurgerIcon type="primary" />
                    ) : (
                      <BurgerIcon type="secondary" />
                    )}

                    <p className="text text_type_main-default">Конструктор</p>
                  </div>
                )}
              </NavLink>
            </div>

            <div
              className={classNames(
                styles["app-header__btn-container__btn"],
                "pl-5 pr-5 pb-5 pt-5"
              )}
            >
              <NavLink
                to={`/feed`}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.link
                }
              >
                {({ isActive }) => (
                  <div className={styles["app-header__btn-container-menu"]}>
                    {isActive ? (
                      <ListIcon type="primary" />
                    ) : (
                      <ListIcon type="secondary" />
                    )}

                    <span className="text text_type_main-default">
                      Лента заказов
                    </span>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
          <div className={styles["app-header__logo"]}>
            <NavLink to={`/`}>
              <Logo />
            </NavLink>
          </div>
          <div className={styles["app-header__btn-container"]}>
            <NavLink
              to={`/profile`}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {({ isActive }) => (
                <div
                  data-testid="link_to"
                  className={styles["app-header__btn-container-menu"]}
                >
                  {isActive ? (
                    <ProfileIcon type="primary" />
                  ) : (
                    <ProfileIcon type="secondary" />
                  )}

                  {user ? (
                    <p className="text text_type_main-default">{user.name}</p>
                  ) : (
                    <p className="text text_type_main-default">
                      Личный кабинет
                    </p>
                  )}
                </div>
              )}
            </NavLink>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
