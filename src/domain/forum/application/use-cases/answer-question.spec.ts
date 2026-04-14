import { beforeEach, describe, expect, it } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from '@/repositories/in-memory-answers-repository'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { InMemoryAnswerAttachmentsRepository } from '@/repositories/in-memory-answer-attachments-repository'

let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create answer', () => {
  beforeEach(() => {
    inMemoryAnswerAttachmentsRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswerAttachmentsRepository,
    )
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  it('Should be able to create a answer', async () => {
    const result = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'new answer',
      attachmentsIds: ['1', '2'],
    })

    expect(result.isRight()).toBeTruthy()
    expect(inMemoryAnswersRepository.items[0].id).toEqual(
      result.value?.answer.id,
    )
    expect(
      inMemoryAnswersRepository.items[0].attachments.currentItems,
    ).toHaveLength(2)
    expect(inMemoryAnswersRepository.items[0].attachments.currentItems).toEqual(
      [
        expect.objectContaining({ attachmentId: new UniqueEntityId('1') }),
        expect.objectContaining({ attachmentId: new UniqueEntityId('2') }),
      ],
    )
  })
})
