import React, { useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import {
  Button,
  EditIcon,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../service/actions/profileTunk";
import { USER_SLICE } from "../../service/userSlice";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = useSelector((store) => store[USER_SLICE].isLogin);
  const dispatch = useDispatch();
  const handleProfileOrders = () => {
    navigate("/profile/orders");
  };
  const handleLogout = () => {
    dispatch(fetchLogout());

    if (isLogin) {
      navigate("/login");
    }
  };

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
                isActive ? styles.activeLink : styles.link
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
            <li
              className={styles["container__profile-menu-li"]}
              onClick={handleLogout}
            >
              Выход
            </li>
          </ul>
          <p className={styles["container__profile-menu-chapter"]}>
            В этом разделе вы можете <br />
            изменить свои персональные данные
          </p>
        </div>
        <div>
          <InputPlaceholder
            text={"Имя"}
            name={"Name"}
            icon={"EditIcon"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputPlaceholder
            text={"Логин"}
            name={"Login"}
            icon={"EditIcon"}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <InputPlaceholder
            text={"Пароль"}
            name={"Password"}
            icon={"EditIcon"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles["container__profile-menu-chapter-btn"]}>
            <Button htmlType="button" type="secondary" size="medium">
              Отмена
            </Button>
            <Button htmlType="button" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
