import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useRef, useState } from "react";

const InputPlaceholder = ({ name, text, icon, value, onChange }) => {
  const inputRef = useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className="ml-5 mr-5 mb-5 mt-5">
      <Input
        type={"text"}
        placeholder={text}
        icon={icon}
        name={name}
        value={value}
        error={false}
        ref={inputRef}
        onChange={onChange}
        onIconClick={onIconClick}
        errorText={"Ошибка"}
        size={"default"}
      />
    </div>
  );
};

export default InputPlaceholder;
