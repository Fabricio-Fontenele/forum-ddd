import { expect, test } from 'vitest'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create an question', async () => {
  const CreateQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await CreateQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'content question',
  })

  expect(question.id).toBeTruthy()
})
