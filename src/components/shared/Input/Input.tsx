import React, { FC } from "react";

import classes from "./Input.module.scss";

interface InputProps {
  placeholder?: string;
  name?: string;
  type: string;
  className?: string;
  onChange?: () => void;
}

export const Input: FC<InputProps> = ({
  placeholder,
  name,
  className,
  type,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      className={classes.formControlInput}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
};

