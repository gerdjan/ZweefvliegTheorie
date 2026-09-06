export type SourceReference = {
  file: string
  page: number
  pageEnd?: number
  section: string
  note?: string
}

export type TheoryStep = {
  type: 'theory'
  title: string
  text: string
  source?: SourceReference
  practiceSource?: SourceReference
}

export type QuestionStep = {
  type: 'question'
  question: string
  answers: string[]
  correctIndex: number
  explanation: string
  source?: SourceReference
  practiceSource?: SourceReference
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

export type SourcedTheoryStep = TheoryStep & { source: SourceReference }
export type SourcedQuestionStep = QuestionStep & { source: SourceReference }
export type SourcedLessonStep = SourcedTheoryStep | SourcedQuestionStep
export type SourcedLesson = Omit<Lesson, 'steps'> & { steps: SourcedLessonStep[] }
export type SourcedUnit = Omit<Unit, 'lesson'> & { lesson: SourcedLesson }
export type SourcedSubject = Omit<Subject, 'units'> & { units: SourcedUnit[] }
