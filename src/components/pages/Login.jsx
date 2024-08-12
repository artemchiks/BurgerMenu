import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
const Login = () => {
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    navigate("/login/register");
  };

  const handleForgotPasswordClick = () => {
    navigate("/login/forgot-password");
  };

  return (
    <>
      <ConstrucoirAvtorixationForm text={"Вход"}>
        {" "}
        <div
          className={classNames(
            styles["entrance-block__content-input"],
            "ml-5 mr-5 mb-5 mt-5"
          )}
        >
          <div className="ml-5 mr-5 mb-5 mt-5">
            <EmailInput name={"email"} isIcon={false} />
          </div>
          <div className="ml-5 mr-5 mb-5 mt-5">
            <PasswordInput name={"password"} extraClass="mb-2" />
          </div>
        </div>
        <div className={styles["entrance-block__content-btn"]}>
          <Button htmlType="button" type="primary" size="large">
            Войти
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?{" "}
          <button
            className={classNames(
              styles["entrance-block__content-register-text"],
              "text text_type_main-small"
            )}
            onClick={handleRegistrationClick}
          >
            Зарегестрироваться
          </button>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <button
            className={styles["entrance-block__content-register-text"]}
            onClick={handleForgotPasswordClick}
          >
            Восстановить пароль
          </button>
        </p>
      </ConstrucoirAvtorixationForm>
    </>
  );
};

export default Login;
