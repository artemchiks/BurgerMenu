import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormEvent, useState } from "react";
import styles from "./singleСlass.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import { loginApi } from "../service/actions/loginActions";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import { useAppDispatch } from "../hooks/hooksDispath";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const [error, setError] = useState<string | null>(null);

  const handleRegistrationClick = () => {
    navigate("/register");
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { email, password } = values;

    if (!email || !password) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    if (!isValid) {
      return;
    }

    const [isSuccess, loginError] = await dispatch(
      loginApi(email, password) as any
    );
    if (isSuccess) {
      resetForm();
      navigate("/");
    } else {
      setError(loginError);
    }
  };

  return (
    <ConstrucoirAvtorixationForm text={"Вход"}>
      <form
        className={classNames(
          styles["entrance-block__content-input"],
          "ml-5 mr-5 mb-5 mt-5"
        )}
        onSubmit={handleLogin}
      >
        <div className="ml-5 mr-5 mb-5 mt-5">
          <EmailInput
            name={"email"}
            value={values.email || ""}
            onChange={handleChange}
          />
          <span className={styles["entrance-block__content-input-err"]}>
            {errors.email}
          </span>
        </div>
        <div className="ml-5 mr-5 mb-5 mt-5">
          <PasswordInput
            name={"password"}
            extraClass="mb-2"
            value={values.password || ""}
            onChange={handleChange}
          />
          <span>{errors.password}</span>
        </div>
        {error && (
          <span className="text text_type_main-default text_color_inactive">
            {error}
          </span>
        )}{" "}
        <div className={styles["entrance-block__content-btn"]}>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            disabled={!isValid}
          >
            Войти
          </Button>
        </div>
      </form>

      <p className="text text_type_main-default text_color_inactive">
        Вы — новый пользователь?{" "}
        <button
          className={classNames(
            styles["entrance-block__content-register-text"],
            "text text_type_main-small"
          )}
          onClick={handleRegistrationClick}
        >
          Зарегистрироваться
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
  );
};

export default Login;
