import React, { useEffect, useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import {
  Button,
  EditIcon,
  EmailInput,
  ShowIcon,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutApi } from "../service/actions/logOutUser";
import { useDispatch, useSelector } from "react-redux";
import { USER_SLICE } from "../service/userSlice";
import { fetchUpdateUserData } from "../service/actions/userAuthActions";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state[USER_SLICE]);

  const [name, setName] = useState(user?.name);
  const [login, setLogin] = useState(user?.email);
  const [isEditing, setIsEditing] = useState(false);
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleProfileOrders = () => {
    navigate("/profile/orders");
  };

  useEffect(() => {
    setName(user?.name || "");
    setLogin(user?.email || "");
  }, [user]);
  const handleLogout = async () => {
    const success = await dispatch(logoutApi());
    if (success) {
      navigate("/login");
    }
  };

  const handleUpdateUser = async (e) => {
    const success = await dispatch(fetchUpdateUserData(login, name, password));
    if (success) {
      setIsEditing(false);
    }
  };
  const handleChange = () => {
    if (name || login || password) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };
  const handleCancel = () => {
    setName(user?.name || "");
    setLogin(user?.email || "");
    setPassword("");
    setIsEditing(false);
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
        <form onSubmit={handleUpdateUser}>
          <InputPlaceholder
            text={"Имя"}
            name={"Name"}
            icon={"EditIcon"}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleChange();
            }}
          />

          <InputPlaceholder
            text={"Логин"}
            name={"Login"}
            icon={"EditIcon"}
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
              handleChange();
            }}
          />
          <div className={styles["container__profile-menu-chapter-pass"]}>
            <PasswordInput
              name={"password"}
              extraClass="mb-2"
              onChange={(e) => {
                setPassword(e.target.value);
                handleChange();
              }}
              value={password}
            />
          </div>

          {isEditing && (
            <div className={styles["container__profile-menu-chapter-btn"]}>
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                onClick={handleCancel}
              >
                Отмена
              </Button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
