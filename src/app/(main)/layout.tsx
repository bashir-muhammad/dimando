import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import Styles from "./layout.module.css";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={Styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
