import React from "react";
import "./Input.css";

export const Input = ({
  readonly,
  type,
  width,
  height,
  onChange,
  value,
  name,
  label,
  padding,
  min,
  max,
}) => {
  const inputStyle = {
    width: width,
    height: height,
    padding: padding,
  };

  return (
    <div className="default-input">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        min={min}
        max={max}
        onChange={onChange}
        readOnly={readonly}
        type={type}
        value={value}
        style={inputStyle}
        name={name}
      ></input>
    </div>
  );
};

export default Input;
