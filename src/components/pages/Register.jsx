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
import { useCookies } from "react-cookie";
import { registerApi } from "../../service/actions/registerActions";
import { useDispatch } from "react-redux";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    setError(null);
    const [isSuccess, registerError] = await dispatch(
      registerApi(email, password, name)
    );
    if (isSuccess) {
      navigate("/login");
    } else {
      setError(registerError);
    }
  };

  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Регистрация"}>
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
        <span>{error}</span>
        <div className={styles["entrance-block__content-btn"]}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            onClick={handleSubmit}
          >
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
      </ConstrucoirAvtorixationForm>
    </div>
  );
};
export default Register;
