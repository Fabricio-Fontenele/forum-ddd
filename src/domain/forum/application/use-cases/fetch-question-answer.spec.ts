import { beforeEach, expect, it, describe } from 'vitest'
import { InMemoryAnswersRepository } from '@/repositories/in-memory-answers-repository'
import { FetchQuestionsAnswersUseCase } from './fetch-question-answer'
import { makeAnswer } from '@/factories/make-answer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: FetchQuestionsAnswersUseCase

describe('Fetch Question answers', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new FetchQuestionsAnswersUseCase(inMemoryAnswersRepository)
  })

  it('Should be able to fetch question answers', async () => {
    await inMemoryAnswersRepository.create(
      makeAnswer({ questionId: new UniqueEntityId('question-1') }),
    )
    await inMemoryAnswersRepository.create(
      makeAnswer({ questionId: new UniqueEntityId('question-1') }),
    )
    await inMemoryAnswersRepository.create(
      makeAnswer({ questionId: new UniqueEntityId('question-1') }),
    )

    const { answers } = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(answers).toHaveLength(3)
  })

  it('Should be able to fetch paginated question answers', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryAnswersRepository.create(
        makeAnswer({ questionId: new UniqueEntityId('question-1') }),
      )
    }

    const { answers } = await sut.execute({
      questionId: 'question-1',
      page: 2,
    })

    expect(answers).toHaveLength(2)
  })
})
