import type { Progress } from '../domain/types'

const KEY = 'zweeftheorie.progress.v1'

export const defaultProgress: Progress = {
  xp: 0,
  hearts: 5,
  streak: 1,
  completedLessons: [],
  questionReviews: {},
  checkpointScores: {},
  examBestScore: 0,
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if(!raw) return defaultProgress
    const parsed=JSON.parse(raw) as Partial<Progress>
    return {
      ...defaultProgress,
      ...parsed,
      completedLessons:Array.isArray(parsed.completedLessons)?parsed.completedLessons:[],
      questionReviews:parsed.questionReviews ?? {},
      checkpointScores:parsed.checkpointScores ?? {},
      examBestScore:parsed.examBestScore ?? 0,
    }
  } catch {
    return defaultProgress
  }
}

export function saveProgress(progress: Progress) {
  localStorage.setItem(KEY, JSON.stringify(progress))
}
