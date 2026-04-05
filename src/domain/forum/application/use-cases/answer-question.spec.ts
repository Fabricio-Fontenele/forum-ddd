import { beforeEach, describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from '@/repositories/in-memory-answers-repository'

let sut: AnswerQuestionUseCase
let inMemoryAnswersRepository: InMemoryAnswersRepository

describe('Create answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('Should be able to create a answer', async () => {
    const result = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'new answer',
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0].id).toEqual(
      result.value?.answer.id,
    )
  })
})
