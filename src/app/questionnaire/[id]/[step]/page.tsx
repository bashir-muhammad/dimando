"use client";
import { useParams, useRouter } from "next/navigation";
import { useApp } from "@/context/app-context";
import { Button } from "@/components/button/button";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";

export default function Questionnaires() {
  const { id, step } = useParams();
  const router = useRouter();
  const { state, dispatch } = useApp();

  const stepIndex = Number(step) - 1;
  const questionnaire = state.config?.questionnaires.find((q) => q.id === id);
  const currentQuestion = questionnaire?.questions[stepIndex];
  const total = questionnaire?.questions.length || 0;

  const currentSavedAnswer = state.responses[id as string]?.[stepIndex] || {
    rating: 0,
    followUP: "",
  };

  const updateRating = (rating: number) => {
    dispatch({
      type: "SET_ANSWER",
      payload: {
        qId: id as string,
        index: stepIndex,
        answer: { ...currentSavedAnswer, rating },
      },
    });
  };

  const updateFollowUp = (val: string) => {
    dispatch({
      type: "SET_ANSWER",
      payload: {
        qId: id as string,
        index: stepIndex,
        answer: { ...currentSavedAnswer, followUp: val },
      },
    });
  };

  if (!currentQuestion) return null;

  return (
    <main>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => router.back()}
        disabled={stepIndex === 0}
      >
        <ArrowLeft />
        Back
      </Button>
      <p>
        {state.config?.questionnaire["sup-title"]
          ?.replace("{current}", step as string)
          .replace("{total}", total.toString())}
      </p>
      <h2>{currentQuestion.question}</h2>
      <p>{state.config?.questionnaire.description}</p>
      {/* <RatingGroup></RatingGroup> */}

      {/* <RadioOptions></RadioOptions> */}

      <div>
        <Button
          onClick={() =>
            stepIndex + 1 < total
              ? router.push(`/questionnaire/${id}/${Number(step) + 1}`)
              : router.push("/results")
          }
          disabled={!currentSavedAnswer.rating || !currentSavedAnswer.followUp}
        >
          {stepIndex + 1 === total ? "Finish" : "Next"}
          <ArrowRight />
        </Button>
      </div>
    </main>
  );
}
