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
import { useDispatch } from "react-redux";
const Login = ({ handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleRegistrationClick = () => {
    navigate("/register");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };
  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };
  const handleLogin = async () => {
    const response = await fetch(
      "https://norma.nomoreparties.space/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.success) {
      const { accessToken, refreshToken } = data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/");
    } else {
      console.error("Ошибка авторизации:", data.message);
    }
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
            <EmailInput
              name={"email"}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="ml-5 mr-5 mb-5 mt-5">
            <PasswordInput
              name={"password"}
              extraClass="mb-2"
              value={pass}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className={styles["entrance-block__content-btn"]}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            onClick={handleLogin}
          >
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
