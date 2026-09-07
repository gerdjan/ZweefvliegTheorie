export type SourceFreshness='stable'|'dynamic'

export type SourceReference = {
  file: string
  page: number
  pageEnd?: number
  section: string
  note?: string
  freshness?: SourceFreshness
  currentCheck?: string
}

export type QuestionOrigin = {
  id?: string
  originLessonId?: string
  originChapterId?: string
}

export type TheoryStep = {
  type: 'theory'
  title: string
  text: string
  source?: SourceReference
  practiceSource?: SourceReference
}

export type QuestionStep = QuestionOrigin & {
  type: 'question'
  question: string
  answers: string[]
  correctIndex: number
  explanation: string
  source?: SourceReference
  practiceSource?: SourceReference
  illustrationKey?: string
}

export type NumericQuestionStep = QuestionOrigin & {
  type: 'numeric'
  question: string
  correctAnswer: number
  tolerance?: number
  unit?: string
  explanation: string
  source?: SourceReference
  practiceSource?: SourceReference
  illustrationKey?: string
}

export type OrderQuestionStep = QuestionOrigin & {
  type: 'order'
  question: string
  items: string[]
  correctOrder: string[]
  explanation: string
  source?: SourceReference
  practiceSource?: SourceReference
  illustrationKey?: string
}

export type MatchQuestionStep = QuestionOrigin & {
  type: 'match'
  question: string
  pairs: { left:string; right:string }[]
  explanation: string
  source?: SourceReference
  practiceSource?: SourceReference
  illustrationKey?: string
}

export type LessonStep = TheoryStep | QuestionStep | NumericQuestionStep | OrderQuestionStep | MatchQuestionStep
export type KnowledgeCheckStep = Exclude<LessonStep, TheoryStep>

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

export type ReviewItem = {
  questionId: string
  lessonId: string
  chapterId?: string
  stage: number
  dueAt: string
  attempts: number
  correct: number
  lastAnsweredAt: string
}

export type QuestionResult = {
  questionId: string
  lessonId: string
  chapterId?: string
  correct: boolean
}

export type LessonResult = {
  score: number
  passed: boolean
  correct: number
  total: number
  answers: QuestionResult[]
}

export type Progress = {
  xp: number
  hearts: number
  streak: number
  completedLessons: string[]
  questionReviews: Record<string, ReviewItem>
  checkpointScores: Record<string, number>
  examBestScores: Record<string, number>
}

export type SourcedTheoryStep = TheoryStep & { source: SourceReference }
export type SourcedQuestionStep = QuestionStep & { source: SourceReference }
export type SourcedNumericQuestionStep = NumericQuestionStep & { source: SourceReference }
export type SourcedOrderQuestionStep = OrderQuestionStep & { source: SourceReference }
export type SourcedMatchQuestionStep = MatchQuestionStep & { source: SourceReference }
export type SourcedLessonStep = SourcedTheoryStep | SourcedQuestionStep | SourcedNumericQuestionStep | SourcedOrderQuestionStep | SourcedMatchQuestionStep
export type SourcedLesson = Omit<Lesson, 'steps'> & { steps: SourcedLessonStep[] }
export type SourcedUnit = Omit<Unit, 'lesson'> & { lesson: SourcedLesson }
export type SourcedSubject = Omit<Subject, 'units'> & { units: SourcedUnit[] }
