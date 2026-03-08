import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    questionId: "question-1",
    instructorId: "instructor-1",
    content: "new answer",
  });

  expect(answer.content).toEqual("new answer");
});
