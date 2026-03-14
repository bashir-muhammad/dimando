import { ButtonHTMLAttributes, AnchorHTMLAttributes, ElementType } from "react";
import styles from "./button.module.css";

interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  as?: ElementType;
  disabled?: boolean;
}

interface ButtonAsButton
  extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
}

interface ButtonAsAnchor
  extends ButtonBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: "a";
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;
const Button = ({
  variant = "primary",
  size = "md",
  className,
  as: Component = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (Component === "a") {
    return (
      <Component
        className={combinedClasses}
        aria-disabled={disabled}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return (
    <Component
      className={combinedClasses}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
};

export { Button };
