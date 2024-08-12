import React from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Восстановление пароля"}>
        <InputPlaceholder text={"Укажите e-mail"} />
        <div className={styles["entrance-block__content-btn"]}>
          <Button htmlType="button" type="primary" size="large">
            Восстановить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <button
            className={styles["entrance-block__content-register-text"]}
            onClick={login}
          >
            Войти
          </button>
        </p>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};

export default ResetPassword;
