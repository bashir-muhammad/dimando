import { ButtonHTMLAttributes, AnchorHTMLAttributes, ElementType } from "react";
import styles from "./button.module.css";

interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  as?: ElementType;
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
  ...props
}: ButtonProps) => {
  const combinedClasses = [styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (Component === "a") {
    return (
      <Component
        className={combinedClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return (
    <Component
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
};

export { Button };
