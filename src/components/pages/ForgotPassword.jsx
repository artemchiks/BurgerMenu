import React, { useState } from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";
import { useNavigate } from "react-router-dom";
import styles from "./singleСlass.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { forgotPassApi } from "../../service/actions/forgotPassActions";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handelLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async () => {
    setError(null);
    const { success, error } = await dispatch(forgotPassApi(email));
    if (error) {
      return "";
    }
    if (email === "") {
      return setError("Введите корректный email!");
    }
    if (success) {
      navigate("/reset-password");
    } else {
      setError(error);
    }
  };

  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Восстановление пароля"}>
        <InputPlaceholder
          text={"Укажите e-mail"}
          value={email}
          onChange={handleEmailChange}
        />
        <span className="text text_type_main-small">{error}</span>
        <div className={styles["entrance-block__content-btn"]}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            onClick={handleSubmit}
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
    </div>
  );
};

export default ForgotPassword;
