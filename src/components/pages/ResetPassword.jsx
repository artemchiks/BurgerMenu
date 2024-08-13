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
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
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
        body: JSON.stringify({ password: newPassword, token }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.success) {
      navigate("/login");
    } else {
      console.error("Ошибка сброса пароля:", data.message);
    }
  };

  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Сброс пароля"}>
        <PasswordInput
          placeholder="Введите новый пароль"
          name="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          extraClass="mb-2"
        />
        <InputPlaceholder
          text={"Введите код из письма"}
          value={token}
          onChange={handleTokenChange}
        />
        <div className={styles["entrance-block__content-btn"]}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <button
            className={styles["entrance-block__content-register-text"]}
            onClick={() => navigate("/login")}
          >
            Войти
          </button>
        </p>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};

export default ResetPassword;
