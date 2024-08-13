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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://norma.nomoreparties.space/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.success) {
      navigate("/login");
    } else {
      console.error("Ошибка регистрации:", data.message);
    }
  };

  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Регистрация"}>
        <form onSubmit={handleSubmit}>
          <div
            className={classNames(
              styles["entrance-block__content-input"],
              "ml-5 mr-5 mb-5 mt-5"
            )}
          >
            <InputPlaceholder
              text={"Имя"}
              name={"Имя"}
              value={name}
              onChange={handleNameChange}
            />
            <div className="ml-5 mr-5 mb-5 mt-5">
              <EmailInput
                name={"email"}
                isIcon={false}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="ml-5 mr-5 mb-5 mt-5">
              <PasswordInput
                name={"password"}
                extraClass="mb-2"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
          </div>
          <div className={styles["entrance-block__content-btn"]}>
            <Button htmlType="submit" type="primary" size="large">
              Зарегистрироваться
            </Button>
          </div>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
            <button
              className={classNames(
                styles["entrance-block__content-register-text"],
                "text text_type_main-small"
              )}
              onClick={() => navigate("/login")}
            >
              Войти
            </button>
          </p>
        </form>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};
export default Register;
