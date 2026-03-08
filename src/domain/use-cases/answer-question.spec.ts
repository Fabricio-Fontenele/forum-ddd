import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import type { AnswersRepository } from "../repositories/answers-repository";
import type { Answer } from "../entities/answer";

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    questionId: "question-1",
    instructorId: "instructor-1",
    content: "new answer",
  });

  expect(answer.content).toEqual("new answer");
});
