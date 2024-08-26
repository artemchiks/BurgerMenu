import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { TICons } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import React, { ChangeEvent, FC, useRef, useState } from "react";


interface Input {
  name?:string;
  text:string;
  icon?:keyof TICons ;
  value:string;
  onChange:(e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?:string;
}

const InputPlaceholder:FC<Input> = ({
  name,
  text,
  icon,
  value,
  onChange,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null); // Используем useRef для обращения к input

  const onIconClick = () => {
      setTimeout(() => inputRef.current?.focus(), 0); // Безопасный доступ с использованием оператора ?
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
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      />
    </div>
  );
};

export default InputPlaceholder;
