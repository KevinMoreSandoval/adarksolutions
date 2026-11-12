
"use client";

import React from "react";
import styles from "./button.module.css";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "xl" | "m" | "s";

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  label,
  variant = "solid",
  size = "m",
  color,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) => {
  const defaultColor = variant === "solid" ? "#212121" : "#4F46E5";
  const buttonColor = color || defaultColor;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      style={{ "--button-color": buttonColor } as React.CSSProperties}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
