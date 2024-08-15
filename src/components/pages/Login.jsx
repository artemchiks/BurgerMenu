import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../service/api/profileApi";
import { fetchLogin } from "../../service/actions/profileTunk";
import { USER_SLICE } from "../../service/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((store) => store[USER_SLICE].isLogin);
  const profilePending = useSelector(
    (store) => store[USER_SLICE].profilePending
  );
  const errorMessage = useSelector((store) => store[USER_SLICE].errorMessage);
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
    dispatch(
      fetchLogin({
        email: email,
        password: pass,
      })
    );
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/"); // Перенаправление на главную страницу после успешного входа
    }
  }, [isLogin, navigate]); // Зависимость от isLogin

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
            {profilePending ? "Выполняется вход" : "Войти"}
          </Button>
          <span className={`text  text_type_main-default ${errorMessage}`}>
            {errorMessage}
          </span>
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
