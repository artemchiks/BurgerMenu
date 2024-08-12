import React, { useRef, useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import classNames from "classnames";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./singleСlass.module.css";
import { useNavigate } from "react-router-dom";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
const Register = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Регистраиця"}>
        <div
          className={classNames(
            styles["entrance-block__content-input"],
            "ml-5 mr-5 mb-5 mt-5"
          )}
        >
          <InputPlaceholder text={"Имя"} name={"Имя"} />
          <div className="ml-5 mr-5 mb-5 mt-5">
            <EmailInput name={"email"} isIcon={false} />
          </div>
          <div className="ml-5 mr-5 mb-5 mt-5">
            <PasswordInput name={"password"} extraClass="mb-2" />
          </div>
        </div>
        <div className={styles["entrance-block__content-btn"]}>
          <Button htmlType="button" type="primary" size="large">
            Зарегистрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрирвоаны?
          <button
            className={classNames(
              styles["entrance-block__content-register-text"],
              "text text_type_main-small"
            )}
            onClick={onClick}
          >
            Войти
          </button>
        </p>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};

export default Register;
