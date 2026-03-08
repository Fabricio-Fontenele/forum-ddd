# 🎓 Forum Clean DDD

> API de fórum de perguntas e respostas construída com **Clean Architecture** e **Domain-Driven Design (DDD)**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)](https://nodejs.org/)
[![Vitest](https://img.shields.io/badge/Vitest-4.0-yellow?logo=vitest)](https://vitest.dev/)

## 📋 Sobre o Projeto

Este projeto é uma aplicação de fórum acadêmico onde instrutores podem responder perguntas feitas por estudantes. Foi desenvolvido seguindo os princípios de **Clean Architecture** e **Domain-Driven Design**, com foco em:

- 🏗️ Separação clara de responsabilidades
- 🔄 Inversão de dependências
- 🧪 Testabilidade e manutenibilidade
- 📦 Organização por domínio

## 🎯 Domínio

O sistema modela um ambiente educacional com as seguintes entidades principais:

- **Student** (Estudante): usuários que fazem perguntas
- **Instructor** (Instrutor): usuários que respondem perguntas
- **Question** (Pergunta): questionamentos feitos pelos estudantes
- **Answer** (Resposta): respostas fornecidas pelos instrutores
- **Slug** (Value Object): identificador amigável para URLs

## 🏛️ Arquitetura

```
src/
└── domain/
    ├── entities/           # Entidades do domínio
    │   ├── student.ts
    │   ├── instructor.ts
    │   ├── question.ts
    │   ├── answer.ts
    │   └── value-objects/  # Objetos de valor
    │       └── slug.ts
    ├── repositories/       # Contratos dos repositórios
    │   └── answers-repository.ts
    └── use-cases/          # Casos de uso da aplicação
        └── answer-question.ts
```

### Camadas

- **Domain**: Núcleo da aplicação contendo regras de negócio e entidades
- **Repositories**: Interfaces que definem contratos para persistência de dados
- **Use Cases**: Orquestração das regras de negócio e fluxos da aplicação

## 🚀 Tecnologias

- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Vitest](https://vitest.dev/)** - Framework de testes unitários

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/forum-clean-ddd.git

# Entre no diretório
cd forum-clean-ddd

# Instale as dependências
npm install
```

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch
```

## 📚 Conceitos Aplicados

### Clean Architecture

- **Independência de frameworks**: O domínio não depende de bibliotecas externas
- **Testabilidade**: Regras de negócio podem ser testadas isoladamente
- **Independência de UI**: A lógica não está acoplada à interface
- **Independência de banco de dados**: O domínio não conhece detalhes de persistência

### Domain-Driven Design (DDD)

- **Entities**: Objetos com identidade única (Student, Question, Answer)
- **Value Objects**: Objetos imutáveis sem identidade (Slug)
- **Repositories**: Abstração para acesso a dados
- **Use Cases**: Casos de uso que expressam intenções do negócio

## 🎓 Aprendizado

Este projeto foi desenvolvido como parte do programa de estudos da **RocketSeat**, focando em:

- Princípios SOLID
- Clean Architecture
- Domain-Driven Design
- Test-Driven Development (TDD)
- TypeScript avançado

## 📝 Licença

Este projeto está sob a licença ISC.

---

<p align="center">
  Desenvolvido com 💜 durante os estudos na RocketSeat
</p>
