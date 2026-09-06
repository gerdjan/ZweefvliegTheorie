export type TheoryStep = {
  type: 'theory'
  title: string
  text: string
}

export type QuestionStep = {
  type: 'question'
  question: string
  answers: string[]
  correctIndex: number
  explanation: string
}

export type LessonStep = TheoryStep | QuestionStep

export type Lesson = {
  id: string
  title: string
  description: string
  minScore: number
  steps: LessonStep[]
}

export type Unit = {
  id: string
  title: string
  lesson?: Lesson
}

export type Subject = {
  id: string
  number: number
  title: string
  sourceFreshness: string
  description: string
  units: Unit[]
}

export type Progress = {
  xp: number
  hearts: number
  streak: number
  completedLessons: string[]
}
