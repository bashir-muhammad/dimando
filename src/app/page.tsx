"use client";
import styles from "@/styles/page.module.css";
import { useApp } from "@/context/app-context";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/card/card";
import DoubleArrowRight from "@/assets/icons/double-arrow-right.svg";

export default function Home() {
  const { state } = useApp();
  return (
    <main className={styles.main}>
      <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: state.config?.homepage.title ?? "" }}
      />
      <p>{state.config?.homepage.description}</p>

      <div className={styles.cards}>
        {state.config?.questionnaires.map((quesionnare) => (
          <Card
            key={quesionnare.id}
            variant="default"
            style={{ backgroundColor: quesionnare.color }}
          >
            <CardTitle>{quesionnare.title}</CardTitle>
            <CardDescription>{quesionnare.description}</CardDescription>
            <CardFooter icon={<DoubleArrowRight width={20} height={20} />}>
              <span>
                {quesionnare.questions.length} Question
                {quesionnare.questions.length > 1 && "s"}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
