import React, { useState } from "react";
import "./Button.css";

const Button = ({ contentArray, classNames, buttons, onClicks }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="button-container">
      {contentArray.map((content, index) => (
        <button
          onClick={onClicks[index]}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          key={index}
          className={`${classNames[index]} ${
            !hovering && index == contentArray.length - 1
              ? "out-of-button"
              : null
          }`}
        >
          {content} {buttons[index] && <img src={buttons[index]}></img>}
        </button>
      ))}
    </div>
  );
};

export default Button;
