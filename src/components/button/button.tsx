import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
}
const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const combinedClasses = [styles[variant], styles[size], className].join(" ");
  return <Button className={combinedClasses} {...props} />;
};

export { Button };
