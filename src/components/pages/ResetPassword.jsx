import React, { useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import {
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://norma.nomoreparties.space/api/password-reset/reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: newPassword }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.success) {
      navigate("/login"); // Перенаправляем на страницу логина после успешного сброса пароля
    } else {
      console.error("Ошибка сброса пароля:", data.message);
    }
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Восстановление пароля"}>
        <PasswordInput
          placeholder="Введите новый пароль"
          name={"password"}
          extraClass="mb-2"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <InputPlaceholder text={"Введите код из письма"} />
        <div className={styles["entrance-block__content-btn"]}>
          <Button htmlType="button" type="primary" size="large">
            Сохранить
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
