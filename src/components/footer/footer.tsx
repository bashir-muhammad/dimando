import { HTMLAttributes } from "react";

import Styles from "./footer.module.css";

const Footer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const combinedClasses = [Styles.footer, className].filter(Boolean).join(" ");
  return (
    <div className={combinedClasses} {...props}>
      <span className={Styles.yellowbar}>Q - All rights reserved 2026</span>
      <div className={Styles.logo}>Privacy Policy | Terms of Use</div>
    </div>
  );
};

export { Footer };
