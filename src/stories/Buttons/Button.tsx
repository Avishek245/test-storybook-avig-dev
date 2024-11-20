import React from "react";

import "./button.css";

type ButtonProps = {
  variant: "primary" | "tertiary" | "warning" | "override" | "secondary";
  className?: string;
  disabled?: boolean;
  label?: string;
  pressed?: boolean;
  icon?: any;
  iconPosition?: "left" | "right";
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  className = "",
  disabled = false,
  label,
  pressed = false,
  icon,
  iconPosition = "left",
  onclick,
}) => {
  return (
    <button
      className={`btn ${variant} ${className} ${pressed ? "pressed" : ""}`}
      disabled={disabled}
      onClick={onclick}
    >
      {icon && iconPosition === "left" && (
        <span className="btn-icon left">{icon}</span>
      )}
      <span className="btn-text">{label}</span>
      {icon && iconPosition === "right" && (
        <span className="btn-icon right">{icon}</span>
      )}
    </button>
  );
};
