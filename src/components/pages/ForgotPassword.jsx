import React from "react";
import ConstrucoirAvtorixationForm from "./ConstrucoirAvtorixationForm/ConstrucoirAvtorixationForm";
import InputPlaceholder from "./ConstrucoirAvtorixationForm/InputPlaceholder";

const forgotPassword = () => {
  return (
    <div>
      <ConstrucoirAvtorixationForm text={"Восстановление пароля"}>
        <InputPlaceholder text={"Укажите e-mail"} />
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <button className={styles["entrance-block__content-register-text"]}>
            Войти
          </button>
        </p>
      </ConstrucoirAvtorixationForm>
    </div>
  );
};

export default forgotPassword;
