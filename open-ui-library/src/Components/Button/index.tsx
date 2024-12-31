import React from "react";
import "./index.css";
import { IButtonProps } from "../../Interface";

const Button: React.FC<IButtonProps> = ({ name, onClick, style, type }) => {
  style = style || {};
  let buttonClass = "button";
  if (type) {
    buttonClass += ` ${type}`;
  }
  return (
    <button className={`button ${buttonClass}`} style={style} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
