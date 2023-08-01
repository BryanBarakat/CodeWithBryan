import React from "react";
import "./Select.css";

export const Select = ({ width, options }) => {
  const styleWidth = {
    width: width,
  };

  return (
    <div className="default-select">
      <select style={styleWidth}>
        {options &&
          options.map((el, index) => (
            <option key={index} value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
