import { HTMLAttributes } from "react";
import Link from "next/link";
import Logo from "@/assets/icons/logo-black.svg";
import Styles from "./header.module.css";

const Header = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const combinedClasses = [Styles.header, className].filter(Boolean).join(" ");
  return (
    <div className={combinedClasses} {...props}>
      <span className={Styles.yellowbar}></span>
      <div className={Styles.logo}>
        <Link href={"/"}>{<Logo />}</Link>
        <span className="sr-only">Logo: Dimando questionnaire</span>
      </div>
    </div>
  );
};

export { Header };
