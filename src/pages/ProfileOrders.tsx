import React from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import {
  EditIcon,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import OrderFeedCart from "../components/OrderFeedConstructor/OrderFeedCart";
const ProfileOrders = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles["container__profile"]}>
        <div>
          <ul
            className={classNames(
              styles["container__profile-menu"],
              "text text_type_main-medium text_color_inactive"
            )}
          >
            <NavLink
              to={`/profile`}
              className={({ isActive }) =>
                isActive ? styles.link : styles.activeLink
              }
            >
              <li className={styles["container__profile-menu-li"]}>Профиль</li>
            </NavLink>
            <NavLink
              to={`/profile/orders`}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              <li className={styles["container__profile-menu-li"]}>
                История заказов
              </li>
            </NavLink>
            <li className={styles["container__profile-menu-li"]}>Выход</li>
          </ul>
          <p className={styles["container__profile-menu-chapter"]}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div>
      <OrderFeedCart/>
      
      </div>
      </div>

    </div>
  );
};

export default ProfileOrders;
