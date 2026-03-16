import { ReactNode } from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import Styles from "./layout.module.css";
export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={Styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
