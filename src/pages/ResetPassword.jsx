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
import { useDispatch } from "react-redux";
import { resetPassApi } from "../service/actions/resetPasswordActions";
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sucsess = await dispatch(resetPassApi(newPassword, token));
    if (sucsess) {
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <Button htmlType="submit" type="primary" size="large">
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
    </form>
  );
};

export default ResetPassword;
