"use client";
import styles from "./page.module.css";
import { useApp } from "@/context/app-context";
import Link from "next/link";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/card/card";
import DoubleArrowRight from "@/assets/icons/double-arrow-right.svg";
import ListAltCheck from "@/assets/icons/list-alt-check.svg";

export default function Home() {
  const { state } = useApp();

  const getLastStep = (qId: string) => {
    const savedAnswers = state.responses[qId];
    if (!savedAnswers) return 1;
    const answeredIndices = Object.keys(savedAnswers).map(Number);
    const lastIndex = Math.max(...answeredIndices);
    return lastIndex + 2;
  };

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
            className={styles.card}
            style={{ backgroundColor: quesionnare.color }}
          >
            <CardTitle>{quesionnare.title}</CardTitle>
            <CardDescription>{quesionnare.description}</CardDescription>
            <CardFooter icon={<DoubleArrowRight width={24} height={24} />}>
              <span>
                {quesionnare.questions.length} Question
                {quesionnare.questions.length > 1 && "s"}
              </span>
            </CardFooter>
            <Link
              className={styles.link}
              href={`questionnaire/${quesionnare.id}/${getLastStep(quesionnare.id)}`}
            >
              <span className="sr-only">Open: {quesionnare.title}</span>
            </Link>
          </Card>
        ))}
        {state.responses && (
          <Card variant="result" className={styles.card}>
            <CardTitle>See results</CardTitle>
            <CardFooter icon={<ListAltCheck width={24} height={24} />}>
              <span>
                {Object.keys(state.responses).length} Questionnaires completed
              </span>
            </CardFooter>
            <Link className={styles.link} href={`/results`}>
              <span className="sr-only">Open result page</span>
            </Link>
          </Card>
        )}
      </div>
    </main>
  );
}
