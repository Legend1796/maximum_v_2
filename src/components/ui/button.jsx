import React, { useEffect, useState } from "react";
import "./button.css";

const Button = ({ children, typeButton, isDisabled }) => {
  const [buttonType, setButtonType] = useState("button_primary");

  useEffect(() => {
    switch (typeButton) {
      case "primary":
        setButtonType("button_primary");
        break;
      case "file":
        setButtonType("button_file");
        break;
      default:
        setButtonType("button_primary");
    }
  }, [typeButton]);

  return (
    <button className={isDisabled ? `button button_disabled ${buttonType}` : `button ${buttonType}`}>{children}</button>
  );
};

export default Button;
