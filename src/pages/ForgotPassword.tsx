import React, { ChangeEvent, FormEvent, useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import { useNavigate } from "react-router-dom";
import styles from "./singleСlass.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassApi } from "../service/actions/forgotPassActions";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [err, setError] = useState<null|string>(null);
  const navigate = useNavigate();


  const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handelLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const { success, error } = await forgotPassApi(email);
    if (error) {
      return "";
    }
    if (email === "") {
      return setError("Введите корректный email!");
    }
    if (success) {
      navigate("/reset-password");
    } else {
      setError( "Неизвестная ошибка");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ConstrucoirAvtorixationForm text={"Восстановление пароля"}>
        <InputPlaceholder
          text={"Укажите e-mail"}
          value={email}
          onChange={handleEmailChange}
        />
        <span className="text text_type_main-small">{err}</span>
        <div className={styles["entrance-block__content-btn"]}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            // onClick={handleSubmit}
          >
            Восстановить
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <button
            type="button"
            className={styles["entrance-block__content-register-text"]}
            onClick={handelLogin}
          >
            Войти
          </button>
        </p>
      </ConstrucoirAvtorixationForm>
    </form>
  );
};

export default ForgotPassword;
