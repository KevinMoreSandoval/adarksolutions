
import React from "react";
import styles from "./text.module.css";

type TextVariant =
  | "title"
  | "subtitle"
  | "paragraph"
  | "caption"
  | "overline";

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: React.ElementType;
  className?: string;
}

const Text = ({
  children,
  variant = "paragraph",
  as = "p",
  className = "",
}: TextProps) => {
  const Component = as;
  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Text;
