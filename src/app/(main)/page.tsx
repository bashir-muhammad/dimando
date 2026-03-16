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
import { Button } from "@/components/button/button";
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
        {state.config?.questionnaires.map((quesionnare) => {
          const completed =
            getLastStep(quesionnare.id) >= quesionnare.questions.length;
          const variant = completed ? "completed" : "default";

          return (
            <Card
              key={quesionnare.id}
              variant={variant}
              className={styles.card}
              style={{ backgroundColor: quesionnare.color }}
            >
              <CardTitle>{quesionnare.title}</CardTitle>
              <CardDescription>{quesionnare.description}</CardDescription>
              <CardFooter>
                <span>
                  {quesionnare.questions.length} Question
                  {quesionnare.questions.length > 1 && "s"}
                  {completed && " completed"}
                </span>
                <Button
                  className={styles.link}
                  variant="icon"
                  as="link"
                  href={`questionnaire/${quesionnare.id}/${getLastStep(quesionnare.id)}`}
                  aria-label={`Open: ${quesionnare.title}`}
                  disabled={completed}
                  aria-disabled={completed}
                >
                  <DoubleArrowRight />
                </Button>
              </CardFooter>
            </Card>
          );
        })}
        {state.responses && (
          <Card variant="result" className={styles.card}>
            <CardTitle>See results</CardTitle>
            <CardFooter>
              <span>
                {Object.keys(state.responses).length} Questionnaires completed
              </span>
              <Button
                className={styles.link}
                variant="icon"
                as="link"
                href="/results"
              >
                <ListAltCheck />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </main>
  );
}
