"use client";

import { useApp } from "@/context/app-context";
import { Button } from "@/components/button/button";

export default function Results() {
  const { state, dispatch } = useApp();
  const completedQuestions = Object.keys(state.responses).length;
  const handleDelete = (qId: string) => {
    dispatch({ type: "DELETE_QUESTIONNAIRE", payload: { qId } });
  };

  return (
    <div>
      <Button as="a" href="/">
        Home
      </Button>
      <h1>{state.config?.questionnaire.results.title}</h1>
      <p>
        {state.config?.questionnaire.results.description.replace(
          "{number}",
          completedQuestions.toString(),
        )}
      </p>

      {Object.entries(state.responses).map(([qId]) => {
        const questionData = state.config?.questionnaires.find(
          (q) => q.id === qId,
        );
        return (
          <Button key={qId} as="a" href={`#${qId}`}>
            {questionData?.title}
          </Button>
        );
      })}

      {Object.entries(state.responses).map(([qId, answers]) => {
        const questionData = state.config?.questionnaires.find(
          (q) => q.id === qId,
        );

        const ratings = Object.values(answers);
        const averageRating =
          ratings.reduce((sum, { rating }) => sum + rating, 0) / ratings.length;

        return (
          <div key={qId}>
            <div id={qId}>
              <span>
                <h2>{questionData?.title}</h2>
                <p>Score: {averageRating}</p>
              </span>
              <Button size="sm" onClick={() => handleDelete(qId)}>
                Clear data
              </Button>
            </div>

            {Object.values(answers).map((answer, index) => (
              <div key={index}>
                <p>Question {index + 1}</p>
                <h3>{questionData?.questions[index].question}</h3>
                <span>{answer.rating}</span>
                <p>
                  Follow up option <span>{answer.followUp}</span>
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
