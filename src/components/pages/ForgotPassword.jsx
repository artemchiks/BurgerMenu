import React, { useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import { useNavigate } from "react-router-dom";
import styles from "./singleСlass.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Хук для навигации

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://norma.nomoreparties.space/api/password-reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.success) {
      navigate("/login/reset-password");
    } else {
      console.error("Ошибка восстановления пароля:", data.message);
    }
  };

  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Восстановление пароля"}>
        <form onSubmit={handleSubmit}>
          <InputPlaceholder
            text={"Укажите e-mail"}
            value={email}
            onChange={handleEmailChange}
          />
          <div className={styles["entrance-block__content-btn"]}>
            <Button htmlType="submit" type="primary" size="large">
              Восстановить
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?{" "}
            <button
              type="button"
              className={styles["entrance-block__content-register-text"]}
            >
              Войти
            </button>
          </p>
        </form>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};

export default ForgotPassword;
