import type { Metadata } from "next";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import Styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Questionnaire",
};

export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={Styles.layout}>
      <div className={Styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
