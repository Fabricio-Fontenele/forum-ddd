import type { AnswersRepository } from '../repositories/answers-repository'
import type { Answer } from '../../enterprise/entities/answer'

interface FetchQuestionsAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionsAnswersUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionsAnswersUseCase {
  constructor(private answerRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionsAnswersUseCaseRequest): Promise<FetchQuestionsAnswersUseCaseResponse> {
    const answers = await this.answerRepository.findManyByQuestionId(
      questionId,
      {
        page,
      },
    )

    if (!answers) {
      throw new Error('Answers not found')
    }

    return {
      answers,
    }
  }
}
