import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import { useDispatch } from "react-redux";
import { loginApi } from "../../service/actions/loginActions";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
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
    setError(null);
    if (!email || !pass) {
      return;
    }
    const [isSuccess, loginError] = await dispatch(loginApi(email, pass));
    if (isSuccess) {
      navigate("/");
    } else {
      setError(loginError);
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
        <span>{error}</span>
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
