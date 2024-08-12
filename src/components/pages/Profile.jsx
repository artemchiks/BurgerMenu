import React from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import {
  EditIcon,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./singleСlass.module.css";
const Profile = () => {
  return (
    <div>
      <ConstrucoirAvtorixationForm>
        <div className={styles["container__profile"]}>
          <div>
            <ul className={styles["container__profile-menu"]}>
              <li className="text text_type_main-medium">Профиль</li>
              <li className="text text_type_main-medium text_color_inactive">
                История заказов
              </li>
              <li className="text text_type_main-medium text_color_inactive">
                Выход
              </li>
            </ul>
            <p>В этом разделе вы можете изменить свои персональные данные</p>
          </div>
          <div>
            <InputPlaceholder
              text={"Имя"}
              name={"Name"}
              icon={<EditIcon type="primary" />}
            />

            <InputPlaceholder
              text={"Логин"}
              name={"Login"}
              icon={<EditIcon type="primary" />}
            />

            <InputPlaceholder
              text={"Пароль"}
              name={"Password"}
              icon={<EditIcon type="primary" />}
            />
          </div>
        </div>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};

export default Profile;
