import { HTMLAttributes } from "react";
import Logo from "@/assets/icons/logo-black.svg?react";
import Styles from "./header.module.css";

const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const combinedClasses = [Styles.header, className].filter(Boolean).join(" ");
  return (
    <div className={combinedClasses} {...props}>
      <span className={Styles.yellowbar}></span>
      <div className={Styles.logo}>
        {<Logo />} <span className="sr-only">Logo: Dimando questionnaire</span>
      </div>
    </div>
  );
};

export { Header };
